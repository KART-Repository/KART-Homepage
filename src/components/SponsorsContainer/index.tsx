import { ReactElement } from 'react'

import { Image } from '@mantine/core'
import Link from 'next/link'

import styles from './style.module.scss'

import { PageVisual } from '~/components/PageVisual'
import { CompanySponsor, UniversitySponsor } from '~/types.ts/sponsors'

type Props = {
  companySponsors: Array<CompanySponsor>
  universitySponsors: Array<UniversitySponsor>
}

export const SponsorsContainer = ({
  companySponsors,
  universitySponsors,
}: Props): ReactElement => {
  return (
    <div className={styles.sponsorsContainer}>
      <section>
        <PageVisual
          bgImageUrl={'/images/intro_sponsors.png'}
          title={'SPONSORS'}
          desc={'To sponsor us is to feel the triumph closer every day.'}
        />
      </section>
      <div className={styles.contents}>
        <section className={styles.sponsorsSection}>
          <Link href={''}> スポンサー様（敬称略）</Link>

          <p>
            2020年度大会に向けたKARTの活動にご理解いただきご支援して下さいましたスポンサー企業様の一覧です。
            この場を借りてお礼申し上げます。
            なお、実際にご支援をいただいた後に掲載する方針ですので、ご了承ください。
          </p>
          <SponsorsTable sponsors={companySponsors} />
        </section>

        <section className={styles.universityRelatedSection}>
          <Link href={''}> 大学関連</Link>
          <p>毎年お世話になっている大学関連の方々です。</p>
          <UniversitysRelatedTable sponsors={universitySponsors} />
        </section>
      </div>
    </div>
  )
}

type CompanyTableProps = {
  sponsors: Array<CompanySponsor>
}

const SponsorsTable = ({ sponsors }: CompanyTableProps): ReactElement => {
  return (
    <table className={styles.sponsorsTable}>
      <tbody className={styles.table}>
        {sponsors.map((sponsor, index) => (
          <tr key={index}>
            <td>
              <div className={styles.sponsorCard}>
                {sponsor.sponsorImage && (
                  <Image
                    src={sponsor.sponsorImage}
                    alt={sponsor.sponsorName}
                    style={{ width: sponsor.isSmImage ? '150px' : '250px' }}
                  />
                )}
                <Link
                  href={sponsor.sponsorLink ? sponsor.sponsorLink : '/sponsors'}
                  style={{ textDecoration: 'none' }}
                >
                  {sponsor.sponsorName}
                </Link>
              </div>
            </td>
            <td>
              <p>{sponsor.sponsorDescription}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

type UniversityTableProps = {
  sponsors: Array<UniversitySponsor>
}

const UniversitysRelatedTable = ({
  sponsors,
}: UniversityTableProps): ReactElement => {
  return (
    <table className={styles.universityRelatedTable}>
      <tbody className={styles.table}>
        {sponsors.map((sponsor, index) => (
          <tr key={index}>
            <td
              style={{
                marginTop: '20px',
              }}
            >
              <Link href={sponsor.sponsorLink}>{sponsor.sponsorName}</Link>
            </td>
            <td>
              <p>{sponsor.sponsorDescription}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
