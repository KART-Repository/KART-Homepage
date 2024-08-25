/* eslint-disable @typescript-eslint/no-explicit-any */
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { SponsorsContainer } from '~/components/SponsorsContainer'
import { BaseHead } from '~/heads/baseHead'
import { DefaultLayout } from '~/layouts/DefaultLayout'
import { client } from '~/libs/cmsClient'
import { CompanySponsor, UniversitySponsor } from '~/types.ts/sponsors'

type Props = {
  companySponsors: Array<CompanySponsor>
  universitySponsors: Array<UniversitySponsor>
}

export default function Sponsors({
  companySponsors,
  universitySponsors,
}: Props) {
  return (
    <>
      <BaseHead title="京都大学フォーミュラプロジェクトKART" />
      <DefaultLayout>
        <Header active={'sponsors'} />
        <SponsorsContainer
          companySponsors={companySponsors}
          universitySponsors={universitySponsors}
        />
        <Footer />
      </DefaultLayout>
    </>
  )
}

export const getStaticProps = async () => {
  const companyItems = await client.get({
    endpoint: 'company_sponsors?limit=100',
  })

  const universityItems = await client.get({
    endpoint: 'university_sponsors',
  })

  const companySponsors = companyItems.contents.map((item: any) => {
    const sponsorImage = item.sponsorImage?.url || ''
    return {
      ...item,
      sponsorImage: sponsorImage,
    } as CompanySponsor
  })

  const universitySponsors = universityItems.contents.map((item: any) => {
    return {
      ...item,
    } as UniversitySponsor
  })

  return {
    props: {
      companySponsors: companySponsors,
      universitySponsors: universitySponsors,
    },
  }
}
