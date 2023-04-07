import React, {useState} from 'react'

function CharacterForm() {
    const [formData, setFormData] = useState({
        name: '',
        crew: '',
        devilFruit: '',
        origin: '',
        image: '',
    })
    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        if ([formData].some(val => val.trim() === "")) {
            alert("Please fill out all the fields, thank you!!!")
            return null
        }

    }
  return (
    <div>
        <h1>Add More Characters!</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}/>
            </label>
            <label>
                Crew:
                <input
                    type='text'
                    name='crew'
                    value={formData.crew}
                    onChange={handleChange}/>
            </label>
            <label>
                Devil Fruit:
                <input
                    type='text'
                    name='devilFruit'
                    value={formData.devilFruit}
                    onChange={handleChange}/>
            </label>
            <label>
                Origin:
                <input
                    type='text'
                    name='origin'
                    value={formData.origin}
                    onChange={handleChange}/>
            </label>
            <label>
                Image URL:
                <input
                    type='text'
                    name='image'
                    value={formData.image}
                    onChange={handleChange}/>
            </label>
        </form>
    </div>
  )
}

export default CharacterForm