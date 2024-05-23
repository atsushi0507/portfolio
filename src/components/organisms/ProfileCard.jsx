import styled from 'styled-components'

const ProfileCard = () => {
  return (
    <Container>
        <PhotoImage
            src="https://unsplash.it/100/102"
            alt="MyProfile"
        />
        <h1>Profile</h1>
        <h2>Name: Atsushi Mizukami</h2>

        <p>
            I am a data scientist with a passion for IT. My expertise lies in data analysis, machine learning, and coding.
            My interests are speading to the full-stacked engineering. Let's connect with me!
        </p>
    </Container>
  )
}

export default ProfileCard

const Container = styled.div`
    width: 22%;
    height: 60%;
    border: 3px solid #3f3f3f;
`

const PhotoImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: block;
    margin: 5px auto;
`