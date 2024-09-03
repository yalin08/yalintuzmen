import React from 'react'

import '../style/About.scss'
const About = () => {
    return (


        <div>


            <div className='container'>

                <div className='aboutCard'>
                    <div className='whoami'>
                        <h3>Ben kimim?</h3>
                        <p>
                            Her zaman yeni şeyler öğrenmeye ve kendimi geliştirmeye hevesliyim. Yaratıcı süreçlerde yer almayı ve fikirlerimi gerçeğe dönüştürmeyi seviyorum.
                            Üretken olmayı, ortaya çıkan işleri görmekten büyük keyif alıyorum.
                            Farklı projelerde edindiğim deneyimlerle kendimi sürekli daha da ileri taşımaya çalışıyorum.

                        </p>
                    </div>

                    <div className='skillset'>
                        <h3>Kullanabildiğim teknolojiler</h3>
                        <div className='skills'></div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default About