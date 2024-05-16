/* eslint-disable @typescript-eslint/no-explicit-any */
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { SponsorsContainer } from '~/components/SponsorsContainer'
import { BaseHead } from '~/heads/baseHead'
import { DefaultLayout } from '~/layouts/DefaultLayout'
import { buildClient } from '~/libs/contentful'
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
  const client = buildClient()
  const companyItems = await client.getEntries({
    content_type: 'companySponsor',
  })

  const universityItems = await client.getEntries({
    content_type: 'universitySponsors',
  })

  const companySponsors = companyItems.items.map((item: any) => {
    const sponsor = item.fields
    const sponsorImage = sponsor.sponsorImage.fields.file.url || ''

    return {
      ...sponsor,
      sponsorImage: sponsorImage,
      createdAt: item.sys.createdAt,
    } as CompanySponsor
  })

  const universitySponsors = universityItems.items.map((item: any) => {
    return {
      ...item.fields,
      createdAt: item.sys.createdAt,
    } as UniversitySponsor
  })

  return {
    props: {
      companySponsors: companySponsors,
      universitySponsors: universitySponsors,
    },
  }
}
