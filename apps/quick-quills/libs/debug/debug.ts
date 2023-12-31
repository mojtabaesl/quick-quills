export type LogLevel = 'error' | 'info' | 'silent' | 'trace' | 'warn';

export interface Logger {
  log: (...data: unknown[]) => void;
  warn: (...data: unknown[]) => void;
  error: (...data: unknown[]) => void;
}

export enum DebugScopes {
  Todo = 'Todo',
  Inventory = 'Inventory',
  AllBooks = 'AllBooks',
  Home = 'Home',
  Service = 'Service',
  All = 'All',
}

type DebugScope = DebugScopes | string;

export class Debug {
  private logOrder = ['trace', 'info', 'warn', 'error', 'silent'];

  constructor(
    private logger: Logger,
    private logLevel: LogLevel = 'silent',
    private scopes: DebugScope[] = [],
    private style: string = ''
  ) {}

  private isInLogLevel(level: LogLevel) {
    return this.logOrder.indexOf(this.logLevel) <= this.logOrder.indexOf(level);
  }

  private isInScope(scope: DebugScope) {
    return (
      this.scopes.includes(scope) ||
      this.scopes.includes(DebugScopes.All) ||
      scope === DebugScopes.All
    );
  }

  private shouldLog(scope: DebugScope, level: LogLevel) {
    return this.isInLogLevel(level) && this.isInScope(scope);
  }

  trace(scope: DebugScope, ...data: unknown[]) {
    if (this.shouldLog(scope, 'trace'))
      this.logger.log(`%c${scope}`, this.style, ...data);
  }

  log(scope: DebugScope, ...data: unknown[]) {
    if (this.shouldLog(scope, 'info'))
      this.logger.log(`%c${scope}`, this.style, ...data);
  }

  warn(...data: unknown[]) {
    if (this.isInLogLevel('warn')) this.logger.warn(...data);
  }

  error(...data: unknown[]) {
    if (this.isInLogLevel('error')) this.logger.error(...data);
  }
}

const env: { logLevel: LogLevel } = {
  logLevel: 'info',
};

const debug = new Debug(console, env.logLevel, [
  DebugScopes.Todo,
  DebugScopes.Inventory,
  DebugScopes.Home,
  DebugScopes.AllBooks,
  DebugScopes.All,
  DebugScopes.Service,
]);

export { debug };
