/* eslint-disable @next/next/no-img-element */
import { ReactElement } from 'react'

import { Carousel } from '@mantine/carousel'
import { Image } from '@mantine/core'
import Link from 'next/link'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

import styles from './style.module.scss'

import { basePath } from 'next.config'

const topImages = ['/images/top1.jpg', '/images/top2.jpg', '/images/top3.jpg']

const bottomImages = [
  '/images/bottom1.jpg',
  '/images/bottom2.jpg',
  '/images/bottom3.jpg',
  '/images/bottom4.jpg',
  '/images/bottom5.jpg',
  '/images/bottom6.jpg',
]

export const TopContainer = (): ReactElement => {
  return (
    <div className={styles.topContainer}>
      <section>
        <Carousel
          withIndicators
          styles={{
            control: {
              background: 'none',
              color: 'white',
              border: 'none',
            },
          }}
          nextControlIcon={<MdNavigateNext size={50} />}
          previousControlIcon={<MdNavigateBefore size={50} />}
        >
          {topImages.map((images, index) => (
            <Carousel.Slide key={index}>
              <Image
                src={`${basePath}${images}`}
                alt={'Kyoto University Formula Project KART'}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </section>
      <section className={styles.discription}>
        <h3>Welcome to Kyoto University Formula Project KART</h3>
        <p>
          We are a team of students at Kyoto University, who design, build and
          race a formula-style car. We develop our car to win the Formula
          Student competisions. Not only racing it, we also manage the project
          in terms of scheme, finance, and human affairs. We are keen to recruit
          new members, and partners who cooperate with us to achieve our goal.
        </p>
      </section>
      <section className={styles.newsSection}>
        <div className={styles.iframeArea}>
          <iframe
            width={'100%'}
            src="https://web.facebook.com/v2.8/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df845c06800e77%26domain%3Dwww.formula-kart.org%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Fwww.formula-kart.org%252Ff1515406ecbdcac%26relation%3Dparent.parent&container_width=374&height=500&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2FKART.official%2F&locale=ja_KS&sdk=joey&show_facepile=false&small_header=false&tabs=timeline&width=600"
            allowFullScreen={true}
          />
          <iframe
            width={'100%'}
            src="https://syndication.twitter.com/srv/timeline-profile/screen-name/kart_official?dnt=false&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&frame=false&hideBorder=false&hideFooter=false&hideHeader=false&hideScrollBar=false&lang=en&maxHeight=400px&origin=http%3A%2F%2Fwww.formula-kart.org%2Findex.html&sessionId=5e04df778756777d4e4bbb5c504a07a4e6db9bbf&showHeader=true&showReplies=false&transparent=false&widgetsVersion=b2c2611296916%3A1702048662315"
          />
        </div>
        <div className={styles.cardArea}>
          <NewsCard
            imageUrl={`${basePath}/images/sinkan.jpg`}
            href=""
            title="2025年度の設計が進んでいます!"
            desc="We welcome new members!"
          />
          <SubCard
            imageUrl={`${basePath}/images/facebook.jpg`}
            href="https://www.facebook.com/KART.official/"
            title="大会や走行会の様子など，イベントの内容を随時更新していきます．"
            desc="FaceBook"
            icon={<FaFacebook />}
          />
          <SubCard
            imageUrl={`${basePath}/images/twitter.jpg`}
            href="https://twitter.com/kart_official"
            title="メンバーの日ごろのつぶやきです．"
            desc="Twitter @kart_official"
            icon={<FaTwitter />}
          />
          <SubCard
            imageUrl={`${basePath}/images/work-2.jpg`}
            href="https://www.jsae.or.jp/formula/"
            title="全日本学生フォーミュラ公式サイト"
            desc="FSAE Japan Official Page"
          />
        </div>
      </section>
      <Link href="/sponsors">
        <Image src={`${basePath}/images/intro_sponsors.png`} alt={'Sponsors'} />
      </Link>
      <section className={styles.discription}>
        <h3>RECENT ACTIVITIES</h3>
        <p>
          第22回学生フォーミュラ日本大会 2024年9月9日～14日 (2024.11.06
          updated)
        </p>
        <Carousel
          withIndicators
          height={200}
          slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
          slideGap={{ base: 0, sm: 'md' }}
          loop
          controlSize={60}
          styles={{
            control: {
              backgroundColor: 'transparent',
              color: 'white',
              border: 'none',
            },
          }}
          nextControlIcon={<MdNavigateNext size={50} />}
          previousControlIcon={<MdNavigateBefore size={50} />}
          align="center"
        >
          {bottomImages.map((images, index) => (
            <Carousel.Slide key={index}>
              <Image src={`${basePath}${images}`} alt="" />
            </Carousel.Slide>
          ))}
        </Carousel>
      </section>
    </div>
  )
}

type NewsCardProps = {
  imageUrl: string
  href?: string
  title?: string
  desc?: string
}
const NewsCard = ({
  imageUrl,
  href,
  title,
  desc,
}: NewsCardProps): ReactElement => {
  return (
    <div
      className={styles.newsCard}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className={styles.desc}>
        <a href={href}>{title}</a>
        <p>{desc}</p>
      </div>
    </div>
  )
}

type SubCardProps = {
  imageUrl: string
  href: string
  title: string
  desc: string
  icon?: ReactElement
}

const SubCard = ({
  imageUrl,
  href,
  title,
  desc,
  icon,
}: SubCardProps): ReactElement => {
  return (
    <div className={styles.subCard}>
      <img
        src={imageUrl}
        alt=""
        style={{
          flexShrink: 0,
          width: 170,
          height: 123,
          objectFit: 'cover',
        }}
      />
      <div>
        <a href={href}>{title}</a>
        <p className={styles.desc}>
          {desc}
          <a className={styles.icon}>{icon}</a>
        </p>
      </div>
    </div>
  )
}
