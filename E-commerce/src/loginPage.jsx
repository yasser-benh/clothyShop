import { useState } from "react"
import Homepage from "./homepage"
import './loginpage.css'
export default function LoginPage () {
    const [formData , setFormData] = useState ({email:'' , password:''})
    const [errors , setErrors]=useState({email:'' , password:''})
    const [isSubmitted , setIsSubmitted] =useState(false)
    const handleInputChange = (e) => {
        const {name , value} = e.target 
        setFormData({...formData, [name]: value})

    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
        return emailRegex.test(email)
    }

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        return passwordRegex.test(password)
    }

    const validateForm =() => { 
        let isValid = true
        const newErrors = {email:'', password:''} 

        if (!validateEmail(formData.email)) {
            newErrors.email ="Invalid email address."
            isValid = false
        }

        if (!validatePassword (formData.password)){
            newErrors.password ="Password must be at least 8 characters long."
            isValid = false
        }
        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = (e) => {
        e.prevenDefault()
        if (validateForm()) {
            setIsSubmitted(true)
        }
    }



    

    return(<>
        <div className="form-validation-container">
            <form onSubmit={handleSubmit} className="form-validation">

                    <div>
                        <label>Email</label>
                        <input type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Entre Your Email"
                        onChange={handleInputChange}/>
                        
                        {errors.email && <p stype={{color:'red'}}>{errors.email}</p>}
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="password"
                        name="password"
                        value={formData.password}
                        placeholder="Entre Your Password"
                        onChange={handleInputChange}/>
                        {errors.password && <p stype={{color:'red'}}>{errors.password}</p>}
                    </div>
                    <button type="submit" className="submit">Submitt</button>
             </form>
             {isSubmitted && <Homepage/>}
        </div>
    
    </>)
}
    
        