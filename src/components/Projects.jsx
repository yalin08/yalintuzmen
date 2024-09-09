import React from 'react'

import '../style/Projects.scss'
import { useTranslation } from 'react-i18next';
const Projects = () => {
    const { t } = useTranslation();
    return (
        <div className='projects'>

            <div className='container'>

                <div className='project'>


                    <div className='projectImages'>
                        <img src="public/img/projects/portfolio.png"></img>
                    </div>

                    <div className='projectDetails'>

                        <div className='projectName'>
                            <h3>{t('projects.portfolio')}</h3>
                        </div>
                        <div className='projectDescription'>
                            <pre>
                                {t('projects.portfolioContent')} </pre>
                        </div>


                        <div className='buttons'>
                            <div className='button'>
                                <a href="https://github.com/yalin08/yalintuzmen">{t('projects.githubLink')} (Front End)</a>
                            </div>
                            <div className='button'>
                                <a href="https://github.com/yalin08/PortfolioBlogApi">{t('projects.githubLink')} (Web API)</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='project'>


                    <div className='projectImages'>
                        <img src="public/img/projects/hr.png"></img>
                    </div>

                    <div className='projectDetails'>

                        <div className='projectName'>
                            <h3>{t('projects.hrProject')}</h3>
                        </div>
                        <div className='projectDescription'>
                            <pre>
                                {t('projects.hrContent')} </pre>
                        </div>


                        <div className='buttons'>
                            <div className='button'>
                                <a href="https://github.com/yalin08/Human-Resource-project">{t('projects.githubLink')}</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='project'>


                    <div className='projectImages'>
                        <img src="public/img/projects/eCommerce.png"></img>
                    </div>

                    <div className='projectDetails'>

                        <div className='projectName'>
                            <h3>{t('projects.eCommerce')}</h3>
                        </div>
                        <div className='projectDescription'>
                            <pre>
                                {t('projects.eCommerceContent')} </pre>
                        </div>


                        <div className='buttons'>
                            <div className='button'>
                                <a href="https://github.com/furkan-yigit/ETicaretPlatformu">{t('projects.githubLink')}</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Projects