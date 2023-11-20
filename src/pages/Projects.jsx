import React from 'react'
import Heading from '../Components/Heading'
import CardComponent from '../Components/CardComponent'
import ProjectsData from '../projectsData.json'

const Projects = () => {
    return (
        <div>
            <Heading head="Projelerim" paragraph="Ben Recep Kececi, bu yazıda projelerimle ilgili deneyimlerimi ve başarılarımı paylaşmak istiyorum. Profesyonel kariyerimde çeşitli projelerde yer aldım ve bu projelerde kazandığım deneyimlerle kendimi sürekli geliştirmekteyim" />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 mb-8'>
                
                {
                    ProjectsData.map((item,index)=>{
                        return(
                            <CardComponent key={index} image={item.image} h3={item.title} tags={item.tags} link={item.link}  />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Projects