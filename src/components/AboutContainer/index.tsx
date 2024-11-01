import { ReactElement, ReactNode } from 'react'

import { Image } from '@mantine/core'

import styles from './style.module.scss'

import { basePath } from 'next.config'
import { PageVisual } from '~/components/PageVisual'

export const AboutContainer = (): ReactElement => {
  return (
    <div className={styles.aboutContainer}>
      <section>
        <PageVisual
          bgImageUrl={'/images/teamphoto.jpg'}
          title={'ABOUT US'}
          desc={'KART our team and Student Formula cometition we attend.'}
        />
      </section>
      <div className={styles.contents}>
        <div className={styles.mainContents}>
          <Article
            title="Student Formula"
            imageUrl="/images/GroupPhoto.jpg"
          >
            学生フォーミュラ大会は，フォーミュラカーの製作を通して，学生が実際のものづくりの現場で行われるマーケティング，企画，設計，製造，コスト管理などの活動を行うことによってその能力を競う大会です．これらの活動を通して得られる経験は，教室の中だけでは会得できない大きな財産となります．大会では動的審査5競技（アクセラレーション，スキッドパッド，オートクロス，エンデュランス，燃費）と静的審査3競技（デザイン・コスト・プレゼンテーション）の計8競技の総合得点で競う形となっています．
            この大会は，1981年にものづくりの実践的な教育活動の一環としてアメリカで始まりました．たった4校の参加から始まった大会は，今ではアメリカだけで3つの大会が開催され，世界中から延べ250校を超える大学が参加する大規模なものとなっています．また，アメリカでの大会に加え，イギリス，オーストラリア，イタリア，ブラジル，ドイツなどでも大会が開催され，国際的なものになってきています．日本では，2003年に第1回大会が開催され，今年度（2018年度）で第16回目の大会を迎えます．第11回大会より日本大会もFormulaSAEシリーズに加入し，国際大会として位置づけられてからは，国際大会化に伴い海外からの参加校が増加し，大会のレベルは格段に高まりました．大会規模も拡大を続けており，2019年度の第17回大会では海外チームも含め107校が参戦し，表彰台の頂点を競い合いました．
          </Article>
          <Article title="KART" imageUrl="/images/KART.jpg" right>
            私たちの活動は，いずれ日本を支えていくことになる学生が，レーシングチームという組織の中で座学では学ぶことの出来ない幅広い経験を積み，ものづくりの面白さと厳しさを味わいながらその能力を養うとともに，人間的にも成長していくことを目的としています．活動では，車両の設計，製作のみならず渉外，広報，会計処理，チームマネジメントに至る全ての業務を学生自らの手で行います．その過程で直面する様々な問題を克服しながら，設計や工作機械に関する技術を習得し，設計から製造までの考え方や過程を学びます．さらに，メンバー間で折衝すること，責任を持って担当部署を勤め上げること，知識を自分のものにし決断力や実行力をつけることは，組織で活動してゆく上で必須のものであり，この経験はエンジニアを目指す私達にとって必ず有意義なものとなるはずです．
          </Article>
        </div>
        <div className={styles.subContents}>
          <div>
            <h3>Recent achievements</h3>
            <Image src={`${basePath}/images/award.jpg`} alt="" w={320} />
            <ul>
              <li>
                <a href="">Special Awards (2024)</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Department</h3>
            <ul>
              <li>
                <a href="">1st prize over all (2013)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

type ArticleProps = {
  title: string
  imageUrl: string
  children: ReactNode
  right?: boolean
}

const Article = ({
  title,
  imageUrl,
  children,
  right,
}: ArticleProps): ReactElement => {
  return (
    <section className={styles.article}>
      <h3>{title}</h3>
      <div className={styles.description}>
        <Image
          src={basePath + imageUrl}
          alt=""
          className={styles.articleImage}
          style={{
            float: right ? 'right' : 'left',
            marginRight: right ? '0' : '40px',
            marginLeft: right ? '40px' : '0',
          }}
        />
        <p>{children}</p>
      </div>
    </section>
  )
}
