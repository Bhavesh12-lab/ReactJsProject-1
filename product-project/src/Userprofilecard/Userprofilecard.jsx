
    function Userprofilecard (props){

        const  { imgUrl, name, age, email, hobby, gender, Phone } = props

        return (
    
            <div className="card">
                <img src={imgUrl} height={200} width={200} ></img>
                <h2>Name:{name}</h2>
                <h2>Age:{age}</h2>
                <p>Email:{email}</p>
                <p>Hobby:{hobby}</p>
                <p>Gender:{gender}</p>
                <p>PhoneNO:{Phone}</p>
            </div>
        )

    }
   

export default Userprofilecard;