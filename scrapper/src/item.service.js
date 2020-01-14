export function createItem({ id, age, breed, description, gender, images, provincia, municipio, phone, title }) {
    return {
        id,
        age,
        breed,
        description,
        gender,
        images,
        municipio,
        phone,
        provincia,
        title,
        "uid": "system",
    }
}

export default { createItem };