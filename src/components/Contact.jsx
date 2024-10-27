import { Link } from "react-router-dom"
import { socialLinks } from "../constants"

const Contact = () => {
    return (
        <div>
            <div>
                {socialLinks.map((socialLink, index) => (
                    <div key={index}></div>
                ))}
                {
                    <div className="mt-16 flex flex-wrap gap-12">
                        {socialLinks.map((skill) => (
                            <Link to={skill.link} key={skill.name}>
                                <div className="block-container w-20 h-20">
                                    <div className="btn-back rounded-xl" />
                                    <div className="btn-front rounded-xl flex justify-center items-center">
                                        <img
                                            src={skill.iconUrl}
                                            alt={skill.name}
                                            className="w-1/2 h-1/2 object-contain"
                                        />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default Contact
