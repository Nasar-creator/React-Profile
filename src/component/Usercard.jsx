import UserDetails from "./UserDetails"
export default function Usercard() {
    const skill1=["HTML","CSS","JavaScript","UX/UI"]
    const skill2=["HTML","CSS","JavaScript","MongoDB","Node.js","Express.js"]
    const skill3=["HTML","CSS","JavaScript","MongoDB","Node.js","React.js","Express.js"]
    const skill4=["HTML","CSS","JavaScript","Java","Spring"]
    const skill5=["HTML","CSS","JavaScript","Python","Django","panda"]
  return (
    <>
<UserDetails name="Julie" city="USA" feild="Front-End" status={true} profil="images/1.jpg" skills={skill1}/>
<UserDetails name="Kaylie" city="Canada" feild="Back-End" status={true} profil="images/2.jpg" skills={skill2}/>
<UserDetails name="Amber" city="Califonia" feild="Full Stack Developer" status={true} profil="images/3.jpg" skills={skill3}/>
<UserDetails name="Jack" city="Rome" feild="Full Stack Developer" status={true} profil="images/4.jpg" skills={skill4}/>
<UserDetails name="Gracy" city="Russia" feild="Python Developer" status={false} profil="images/5.jpg" skills={skill5}/>

</>  )
}
