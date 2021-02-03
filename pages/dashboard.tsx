import { DefaultLayout } from '@ui/layouts'
import { Page } from '@ui/page'
import { Loader } from '@ui/loader'

const Dashboard = () => (
  <DefaultLayout>
    <Loader loading={true}>
      <Page>Dashboard</Page>
    </Loader>
  </DefaultLayout>
)

export default Dashboard
