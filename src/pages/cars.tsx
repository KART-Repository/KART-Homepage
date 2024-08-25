/* eslint-disable @typescript-eslint/no-explicit-any */
import { CarsContainer } from '~/components/CarsContainer'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { BaseHead } from '~/heads/baseHead'
import { DefaultLayout } from '~/layouts/DefaultLayout'
import { buildClient } from '~/libs/contentful'
import { Car } from '~/types.ts/cars'

type Props = {
  cars: Array<Car>
}

export default function Cars({ cars }: Props) {
  return (
    <>
      <BaseHead title='"京都大学フォーミュラプロジェクトKART" ' />
      <DefaultLayout>
        <Header active={'theCars'} />
        <CarsContainer cars={cars} />
        <Footer />
      </DefaultLayout>
    </>
  )
}

export const getStaticProps = async () => {
  const client = buildClient()
  const { items } = await client.getEntries({
    content_type: 'car',
  })

  const cars = items.sort((a, b) => Number(b.fields.year) - Number(a.fields.year)).map((item: any) => {
    const car = item.fields
    const carImage = car.carImage.fields.file.url || ''
    return {
      ...car,
      carImage: carImage,
      createdAt: item.sys.createdAt,
    } as Car
  })

  return {
    props: { cars: cars },
  }
}
