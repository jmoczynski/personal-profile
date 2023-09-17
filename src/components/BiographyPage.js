import Container from "react-bootstrap/Container";

function BiographyPage(){
    return(
        <Container>
            <h1 className="text-center">Biography</h1>
            <p>Justin Moczynski is an avid learner, creative thinker, and hard worker with interests in cyber security, springboard diving, and music composition.</p>
            <p>Most recently, he was named a finalist for the Cybersecurity Talent Initiative, a program designed to help emerging cybersecurity
                talent acquire positions within the United States' federal government.</p>
            <p>Related to Justin's education, he has completed education up to the master's level. He earned a Master of Science in Cyber Security from
                Worcester Polytechnic Institute (WPI) in May of 2023. Prior to WPI, he earned two undergraduate degrees from
                Ithaca College in May of 2021, graduating cum laude and earning Dean's List recognition for three semesters.
                He completed a Bachelor's of Science in Mathematics, a Bachelor's of Arts in Computer Science, and
                three minors, the Honors Minor in Interdisciplinary Studies, the Business Administration minor, and the
                Business Analytics minor at Ithaca. Prior to Ithaca College, He completed a High School Diploma in the Spring of 2017. For more details, visit the <a href="#education">Education</a> section.</p>
            <p>Related to Justin's interest in springboard diving, he competed on varsity-level swimming and diving teams as a
                springboard diver at both the collegiate and high-school levels. During his participation, he broke all of the diving records at WPI,
                he was recognized as an athletic and academic All-America student-athlete by the College Swimming and Diving Coaches Association of America (CSCAA),
                participated in the national, regional, and league championship swimming and diving competitions hosted by the National Collegiate Athletics Association (NCAA) at the Division III level.
                For more details, visit the <a href="#activities">Activities and Involvement</a> section.</p>
            <p>Related to Justin's interest in music composition, he began to experiment with music composition while participating in his middle school band program.
                During his high school participation in the band, orchestra, and choral programs, he further developed his music composition, receiving local, district, and state recognition for his
                compositions. For more details, visit the <a href="#hobbies">Hobbies</a> section.</p>
        </Container>
    );
}

export default BiographyPage;