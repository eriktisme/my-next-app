import { DefaultLayout } from "@ui/layouts";
import { Page } from "@ui/page";
import { Loader } from "@ui/loader";
import { NextPage } from "next";

interface DashboardPageProps {
}

const Dashboard: NextPage<DashboardPageProps> = () => (
  <DefaultLayout>
    <Loader loading={ true }>
      <Page>Dashboard</Page>
    </Loader>
  </DefaultLayout>
);

export default Dashboard;
