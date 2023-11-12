export const keys = {
  one: () => ['book'] as const,
  all: () => ['books'] as const,
  filteredAll: (filter?: string) => [...keys.all(), { filter }] as const,
  purchased: () => [...keys.all(), 'purchased'] as const,
  todo: () => [...keys.all(), 'todo'] as const,
  filteredPurchased: (filter?: string) =>
    [...keys.purchased(), { filter }] as const,
  filteredTodo: (filter?: string) => [...keys.todo(), { filter }] as const,
  addBook: () => [...keys.one(), 'add'] as const,
  deleteBook: () => [...keys.one(), 'delete'] as const,
  updateBook: () => [...keys.one(), 'update'] as const,
  quickAccessPurchased: () => [...keys.purchased(), 'quickAccess'] as const,
  quickAccessTodo: () => [...keys.todo(), 'quickAccess'] as const,
};
