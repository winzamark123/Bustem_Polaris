import InfoCard from '../ui/InfoCard';
import LatestHeader from './header';
import LatestItem from './item';
const latestData = [
    {
        title: 'New Infringement Detected',
        value: '0',
        subtitle: 'Review New Infringements',
    },
    {
        title: 'Active Claims',
        value: '0',
        subtitle: 'View Active Claims',
    },
    {
        title: 'Resolved Claims',
        value: '0',
        subtitle: 'View Resolved Claims',
    }
]


export default function Latest(){
  return (
    <main>
      <InfoCard header={<LatestHeader />} items={latestData} ItemLayout={LatestItem}/>
    </main>
  )
}