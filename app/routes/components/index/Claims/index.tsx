import ClaimsHeader from './header';
import InfoCard from '@ui/InfoCard';
import ClaimsItem from './item';

export default function Claims(){
  return (
    <main>
      <InfoCard header={<ClaimsHeader />} items={[]}>
        <ClaimsItem />
      </InfoCard>
    </main>
  )
}