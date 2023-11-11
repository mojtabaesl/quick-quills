import { Page } from '@/ui/components/Page';

export default function TodoLayout(props: {
  main: React.ReactNode;
  quickAccess: React.ReactNode;
}) {
  return (
    <Page>
      {props.main}
      <Page.QuickAccess>{props.quickAccess}</Page.QuickAccess>
    </Page>
  );
}
