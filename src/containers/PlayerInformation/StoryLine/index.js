import React from "react";
import { Avatar, Popover, Card } from "antd";
import ReactPlayer from 'react-player';
import UserImage from "../../../components/UserImage";
import "./storyline.scss";

const StoryLine = () => {
  const content1 = () => (
    <Card className="main-storyline">
      <div className="storyline-part">
        <div className="information">
          <div className="year">2009, Under-19 Cricket</div>
          <p className="description">
            Hailing from a background of high academic standards, KL Rahul was born and brought up in the prestigious National Institute of Technology, Karnataka, where his father is a professor in the department of Civil Engineering. He finished his schooling in NITK and grew to develop keen interest in cricket. Having started off with batting on the grass-less field of the college, Rahul's parents spotted a spark in him and decided that he must receive formal training in order to realize his talents. Rahul rose through the ranks of Under-19 cricket
          </p>
        </div>
      </div>
      <div className="storyline-media">
        <Avatar
          className="image"
          src={require("../../../assets/images/storyline_1.jpg")}
          alt="StoryLine 1"
          shape="square"
          size={192}
        />
        <Avatar
          className="image"
          src={require("../../../assets/images/u19_1.jpg")}
          alt="U19 1"
          shape="square"
          size={192}
        />
        <Avatar
          className="image"
          src={require("../../../assets/images/u19_2.jpg")}
          alt="U19 1"
          shape="square"
          size={192}
        />
        <Avatar
          className="image"
          src={require("../../../assets/images/u19_3.jpg")}
          alt="U19 1"
          shape="square"
          size={192}
        />
        <Avatar
          className="image"
          src={require("../../../assets/images/u19_4.jpg")}
          alt="U19 1"
          shape="square"
          size={192}
        />
        <ReactPlayer
          className="image"
          width="192px"
          height="192px"
          url="https://www.youtube.com/watch?v=bgSCp9k4IKs"
        />
      </div>
    </Card>
  );

  return (
    <div className="storyline">
      <Popover content={content1()} placement="left">
        <div className="storyline-part">
          <Avatar
            className="image"
            src={require("../../../assets/images/storyline_1.jpg")}
            alt="StoryLine 1"
            shape="square"
          />
          <div className="information">
            <div className="year">2009, Under-19 Cricket</div>
            <p className="description">
              Hailing from a background of high academic standards, KL Rahul was born and brought up in the prestigious National Institute of Technology, Karnataka, where his father is a professor in the department of Civil Engineering. He finished his schooling in NITK and grew to develop keen interest in cricket. Having started off with batting on the grass-less field of the college, Rahul's parents spotted a spark in him and decided that he must receive formal training in order to realize his talents. Rahul rose through the ranks of Under-19 cricket
            </p>
          </div>
        </div>
      </Popover>
      <div className="storyline-part">
        <Avatar
          className="image"
          src={require("../../../assets/images/storyline_2.jpg")}
          alt="StoryLine 2"
          shape="square"
        />
        <div className="information">
          <div className="year">2010-13, First Class Cricket</div>
          <p className="description">
            Rahul rose through the ranks of Under-19 cricket and broke into the Karnataka first-class side and had a decent debut season in 2010-11. He was left out of the squad for the succeeding season, but he returned for the 2012-13 season, in which he had a prolific run of form, becoming the highest run-getter of the season, propelling himself into contention for the highest honour of them all – an India Test cap.
          </p>
        </div>
      </div>
      <div className="storyline-part">
        <Avatar
          className="image"
          src={require("../../../assets/images/storyline_3.jpg")}
          alt="StoryLine 3"
          shape="square"
        />
        <div className="information">
          <div className="year">Dec 2014, Test Debut</div>
          <p className="description">
            <b>KL failed to make descent debut. </b>
            The prospect of a debut on a momentous occasion like the Boxing Day at the MCG against the world's chirpiest team seemed to throw Rahul off his game, as he crumbled under pressure and lost his wicket to two shots unbecoming (to say the least) of a Test player. With the series already lost, and in a manifestation of compassion for Rahul's nervous jitters, the selectors and the captain decided to give Rahul a go at his usual opening spot in the Sydney Test. He had a dramatic redemption in Sydney as he stroked his way to a patient century, proving that he belongs in the national side – to himself, more than anyone else.
          </p>
        </div>
      </div>
      <div className="storyline-part">
        <Avatar
          className="image"
          src={require("../../../assets/images/storyline_4.jpg")}
          alt="StoryLine 4"
          shape="square"
        />
        <div className="information">
          <div className="year">2015-17, Test Cricket</div>
          <p className="description">
            <b>In 2017, KL went on to make a heart-breaking 199 in Chennai; his current highest score in Test cricket. </b>
            After century in Sydney, That hundred gave Rahul some momentum, and he went on to make hundreds in Sri Lanka and West Indies on away tours, making the opening combination a dilemma for the Indian selectors. He showed his tendency to convert starts, making his first three fifty-plus scores count, and going on to score a hundred each time. However, he continued to have anxious starts and got the reputation of an 'all-or-nothing' player.
            The young right-hander got a chance to play his first home Test, but a series of injuries and recurrences managed to keep him going in and out of the playing XI until the Chennai Test against England in late 2017 when he made a full recovery.
          </p>
        </div>
      </div>
      <div className="storyline-part">
        <Avatar
          className="image"
          src={require("../../../assets/images/storyline_5.jpg")}
          alt="StoryLine 5"
          shape="square"
        />
        <div className="information">
          <div className="year">June 2016, ODI & T20I Debut</div>
          <p className="description">
            <b>First indian to score century on ODI debut. </b>
            Rahul was selected in the limited-overs squads to Zimbabwe and West Indies in mid-2016. It was then that Rahul showed his versatility across formats, bursting forth with a hundred each on ODI and T20I debut, after a fine run in the IPL for the Royal Challengers Bangalore.
          </p>
        </div>
      </div>
      <div className="storyline-part">
        <Avatar
          className="image"
          src={require("../../../assets/images/storyline_6.jpg")}
          alt="StoryLine 6"
          shape="square"
        />
        <div className="information">
          <div className="year">2018, Downfall of KL in Test</div>
          <p className="description">
            After a run-glut in the 2016/17 seasons, <b>Rahul had a poor 2018 in Test cricket </b>, as he got his first exposure to the moving ball on the surfaces of South Africa, Australia and England. He struggled through all the overseas tour in red-ball cricket, and almost lived a double-life as a white-ball player, bagging a massive 11-crore IPL contract, and ending up as Punjab's best batsman in the 2018 season of the tournament. However, in Test cricket, he was struggling to score so much that he failed to grab the easiest of chances even against a weakened Windies line-up at home. He was eventually dropped from the Test side, as his career fell just short of a full-circle, receiving the ouster for the Boxing Day Test in Melbourne in favour of his Karnataka mate Mayank Agarwal - the very same event in which his Test journey began in 2014.
            Just when it looked like things couldn't get worse for Rahul, an episode of a talk show aired in India, in which Rahul, along with Hardik Pandya, were called out on social media for their misogynistic comments, and were suspended by the Board of Control for Cricket in India for poor conduct and tarnishing the image of Indian cricket. The ban has been lifted since the incident. However, at a crunch time, due to lack of form and off-field issues, Rahul suddenly finds himself in the fringes, with almost no chance to win himself a ticket to England. However, a few months still remain for him to prove his mettle, as he tries to cope with trouble in paradise.
          </p>
        </div>
      </div>
      <div className="storyline-part">
        <Avatar
          className="image"
          src={require("../../../assets/images/storyline_7.jpg")}
          alt="StoryLine 7"
          shape="square"
        />
        <div className="information">
          <div className="year">2018, In Form IPL</div>
          <p className="description">
            <b>KL Rahul holds the record for the fastest IPL fifty (off just 14 balls). </b>
            Strangely, KL wasn’t retained by RCB and Kings XI Punjab took advantage of that in the 2018 IPL auctions. Rahul was bought for Rs. 11 crore, which turned out to be the joint-third highest price for that year. Batting at the top of the order, Rahul proved his worth by amassing 659 runs (average: 54.91, strike-rate: 158.41). He struck six fifties in 14 matches, out of which three were 90+ scores.
          </p>
        </div>
      </div>
      <div className="storyline-part">
        <Avatar
          className="image"
          src={require("../../../assets/images/storyline_8.jpg")}
          alt="StoryLine 8"
          shape="square"
        />
        <div className="information">
          <div className="year">2019, World Cup 19</div>
          <p className="description">
            <b>With the average of 45 he scored 360 runs with funtastic hundread against srilanka. </b>
            Descpite of all controversial comments and experiments on his batting positions; he made it in world cup 2019 squad.
            In the beginning he was playing middle order batsman role but after shikhar dhawan's injury, team decided to play KL at the top order.
            KL didn't disappoint his team or fans by handling pressure situation quite nicely.
          </p>
        </div>
      </div>
      <div className="storyline-part">
        <Avatar
          className="image"
          src={require("../../../assets/images/storyline_9.jpg")}
          alt="StoryLine 9"
          shape="square"
        />
        <div className="information">
          <div className="year">2019, 360 degree Performance</div>
          <p className="description">
            <b>KL Rahul tested with all responsiblities. </b>
            After World cup and IPL, KL struggled in test but he had great year in ODI and T20I format.
            With his bat at any position talent and wicket keeping; he made permanant spot in india team.
            With his consistent strike rate of above 140 in T20I, he gives proper head start.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryLine;
