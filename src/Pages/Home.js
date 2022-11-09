import React from "react";

import PageContent from "../CommonElements/PageContent";
import ContactForm from "../UIElements/ContactForm";
import Card from "../CommonElements/Card";

const Home = () => {
 return (
  <PageContent className="home">
   <h1>About</h1>
   <h3>2013</h3>
   <Card>
    <p>
     I started coding at the university. It was a numerical analysis with C.
    </p>
   </Card>
   <h3>2017</h3>
   <Card>
    <p>
     I worked in a data management team in my first job at BNP Paribas. Besides
     performing my core tasks I also created several process automation tools
     using VBA and Excel.
    </p>
   </Card>
   <h3>2019</h3>
   <Card>
    <p>
     Next, I worked on a startup that was creating IoT based product whose goal
     was to improve parking spot utilization in city centers. There I was
     working on mobile app development (C#/Xamarin) and the hardware part of the
     product (Raspberry.Pi)
    </p>
   </Card>
   <h3>2020</h3>
   <Card>
    <p>
     After the startup, I joined Roche’s .NET team. There I worked with RPA
     scripts (UIParh) and assisted RPA Platform Architect.
    </p>
   </Card>
   <h3>2021</h3>
   <Card>
    <p>
     At that point, I decided to try project management and started working in
     Digitas on the content localization team where I coordinated projects and
     facilitated communication between business and implementation teams.
    </p>
   </Card>
   <Card>
    <p>
     After Digitas, I joined BNP Paribas once again. I worked on RPA projects as
     PM and BA.
    </p>
   </Card>
   <h3>2022</h3>
   <Card>
    <p>
     At this point, I decided to go back to software development. Currently, I
     am creating web applications for my personal use (React and Express.js).
    </p>
   </Card>
   <ContactForm />
  </PageContent>
 );
};

export default Home;
