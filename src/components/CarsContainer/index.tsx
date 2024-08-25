import { ReactElement } from 'react'

import { Image } from '@mantine/core'
import Link from 'next/link'

import styles from './style.module.scss'

import { PageVisual } from '~/components/PageVisual'
import { Car } from '~/types.ts/cars'

type Props = {
  cars: Array<Car>
}

export const CarsContainer = ({ cars }: Props): ReactElement => {
  const topCars = cars.slice(0, 6)
  const bottomCars = cars.slice(6, cars.length - 1)
  return (
    <div className={styles.carsContainer}>
      <section>
        <PageVisual
          bgImageUrl={'/images/top_cars.jpg'}
          title={'THE CARS'}
          desc={'Cars we developed, designed, produced, and raced.'}
        />
      </section>
      <div className={styles.contents}>
        {topCars.map((carData, index) =>
          index % 2 == 0 ? (
            <CarCard
              key={index}
              carImage={carData.carImage}
              carType={carData.carType}
              carName={carData.carName}
              engine={carData.engine}
              wheelbase={carData.wheelbase}
              tread={carData.tread}
              weight={carData.weight}
              overallRanking={carData.overallRanking}
              description={carData.description} year={''}            />
          ) : (
            <CarCard
                isLeft
                key={index}
                carImage={carData.carImage}
                carType={carData.carType}
                carName={carData.carName}
                engine={carData.engine}
                wheelbase={carData.wheelbase}
                tread={carData.tread}
                weight={carData.weight}
                overallRanking={carData.overallRanking}
                description={carData.description} year={''}            />
          ),
        )}
        <div className={styles.bottomCars}>
          {bottomCars.map((carData, index) => (
            <div style={{ width: '45%' }} key={index}>
              <CarCard
                isLeft
                carImage={carData.carImage}
                carType={carData.carType}
                engine={carData.engine}
                wheelbase={carData.wheelbase}
                tread={carData.tread}
                weight={carData.weight}
                overallRanking={carData.overallRanking} year={''}              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

type CarCardProps = Omit<Car, 'createdAt'> & {
  isLeft?: boolean
}

const CarCard = ({
  isLeft,
  carImage,
  carType,
  carName,
  engine,
  wheelbase,
  tread,
  weight,
  overallRanking,
  description,
}: CarCardProps): ReactElement => {
  return isLeft ? (
    <div className={styles.carCard}>
      <div className={styles.carDescription}>
        <div className={styles.carTitle}>
          <h3>
            <Link href={''}>{carType}</Link>
          </h3>
          <h2>{carName}</h2>
        </div>

        {engine && <p>Engine:{engine}</p>}
        {wheelbase && <p>Wheelbase:{wheelbase}mm</p>}
        {tread && <p>Tread:{tread}</p>}
        {weight && <p>Weight:{weight}kg</p>}
        {overallRanking && <p>Overall ranking:{overallRanking}</p>}
        {description && <p>{description}</p>}
      </div>
      <Image
        fit="contain"
        src={carImage}
        alt={carName}
        radius={'md'}
        style={{
          width: '60%',
        }}
      />
    </div>
  ) : (
    <div className={styles.carCard}>
      <Image
        fit="contain"
        src={carImage}
        alt={carName}
        radius={'md'}
        className={styles.carImage}
      />
      <div className={styles.carDescription}>
        <div className={styles.carTitle}>
          <h3>
            <Link href={''}>{carType}</Link>
          </h3>
          <h2>{carName}</h2>
        </div>

        {engine && <p>Engine:{engine}</p>}
        {wheelbase && <p>Wheelbase:{wheelbase}mm</p>}
        {tread && <p>Tread:{tread}</p>}
        {weight && <p>Weight:{weight}kg</p>}
        {overallRanking && <p>Overall ranking:{overallRanking}</p>}
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}
