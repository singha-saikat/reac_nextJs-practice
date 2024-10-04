import Profile from './components/Profile.jsx';
const profile1 = {
  name :'Maria Skłodowska-Curie',
  profession : 'physicist and chemist',
  awards : 4,
  awardsName : '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
  discovered : 'polonium (chemical element)',
  imageId : 'szV5sdG'
}
const profile2 = {
  name :'Katsuko Saruhashi',
  profession : 'geochemist',
  awards : 2,
  awardsName : '(Miyake Prize for geochemistry, Tanaka Prize)',
  discovered : 'a method for measuring carbon dioxide in seawater',
  imageId : 'YfeOqp2'
}


export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile profile = {profile1}/>
      <Profile profile = {profile2}/>
     
    </div>
  );
}
