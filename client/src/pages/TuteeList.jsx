import FeedItem from '../components/MainSection/FeedItem';
import styles from '../pages/TuteeList.module.css';
import { MdSearch, MdFilterList } from 'react-icons/md';
import defaultUser from '../assets/defaultUser.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonTop } from '../components/Button';

const TuteeListData = [
  {
    profileId: 1,
    name: '못해요',
    rate: '',
    subjects: [
      {
        subjectId: 1,
        subjectTitle: '수학',
      },
    ],
    school: '유신고등학교',
    bio: '교복 싫어여',
    profileImage: {
      profileImageId: 1,
      url: defaultUser,
      createAt: '2023-01-10T11:07:36.9022887',
      updateAt: '2023-01-10T11:07:36.9022887',
    },
    createAt: '2023-01-10T11:07:36.9022887',
    updateAt: '2023-01-10T11:07:36.9022887',
  },
  {
    profileId: 2,
    name: '김까치',
    rate: '',
    subjects: [
      {
        subjectId: 1,
        subjectTitle: '영어',
      },
      {
        subjectId: 1,
        subjectTitle: '수학',
      },
    ],
    school: '강아지대학교',
    bio: '점프를 좋아하는 편입니다. 주의해주세요.',
    profileImage: {
      profileImageId: 1,
      url: defaultUser,
      createAt: '2023-01-10T11:07:36.9022887',
      updateAt: '2023-01-10T11:07:36.9022887',
    },
    createAt: '2023-01-10T11:07:36.9022887',
    updateAt: '2023-01-10T11:07:36.9022887',
  },
  {
    profileId: 3,
    name: '김삼순',
    rate: '',
    subjects: [
      {
        subjectId: 1,
        subjectTitle: '자격증',
      },
    ],
    school: '사회인',
    bio: '파티시에가 되기 위해서 베이킹 자격증 공부를 하고 있습니다.',
    profileImage: {
      profileImageId: 1,
      url: defaultUser,
      createAt: '2023-01-10T11:07:36.9022887',
      updateAt: '2023-01-10T11:07:36.9022887',
    },
    createAt: '2023-01-10T11:07:36.9022887',
    updateAt: '2023-01-10T11:07:36.9022887',
  },
];

//ToDo: 필터 버튼이 눌릴 때마다 (onClick value 등이 바뀔 때마다) - 아마 useEffect 사용할듯
//tutorData 새롭게 갱신될 수 있도록 해당 필터 API 데이터 통신과 연결 필요함

const TuteeList = () => {
  const [isClicked, setIsClicked] = useState([]);

  const clickHandler = (e) => {
    if (isClicked.includes(e.target.value)) {
      setIsClicked(isClicked.filter((el) => el !== e.target.value));
    } else {
      setIsClicked([e.target.value, ...isClicked]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerContents}>
            <span className={styles.bannerText}>
              나에게 꼭 맞는 비대면 과외를 찾아보세요!
            </span>
            <div className={styles.searchBox}>
              <div className={styles.iconBox}>
                <MdSearch className={styles.mdSearch} />
              </div>
              <input className={styles.input} placeholder="서울대학교"></input>
            </div>
          </div>
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.menu}>
            <button
              value="국어"
              className={
                isClicked.includes('국어')
                  ? styles.activeMenu
                  : styles.defaultMenu
              }
              onClick={clickHandler}
            >
              국어
            </button>
            <button
              value="수학"
              className={
                isClicked.includes('수학')
                  ? styles.activeMenu
                  : styles.defaultMenu
              }
              onClick={clickHandler}
            >
              수학
            </button>
            <button
              value="사회"
              className={
                isClicked.includes('사회')
                  ? styles.activeMenu
                  : styles.defaultMenu
              }
              onClick={clickHandler}
            >
              사회
            </button>
            <button
              value="과학"
              className={
                isClicked.includes('과학')
                  ? styles.activeMenu
                  : styles.defaultMenu
              }
              onClick={clickHandler}
            >
              과학
            </button>
            <button
              value="영어"
              className={
                isClicked.includes('영어')
                  ? styles.activeMenu
                  : styles.defaultMenu
              }
              onClick={clickHandler}
            >
              영어
            </button>
            <button
              value="자격증"
              className={
                isClicked.includes('자격증')
                  ? styles.activeMenu
                  : styles.defaultMenu
              }
              onClick={clickHandler}
            >
              자격증
            </button>
            <button
              value="기타"
              className={
                isClicked.includes('기타')
                  ? styles.activeMenu
                  : styles.defaultMenu
              }
              onClick={clickHandler}
            >
              기타
            </button>
          </div>
          <div className={styles.filter}>
            <MdFilterList className={styles.mdFilterList} />
            <span>최신 순</span>
          </div>
        </div>
        <div className={styles.feedContainer}>
          {TuteeListData.map((el) => (
            <Link to="" key={el.profileId} className={styles.list}>
              <FeedItem
                name={el.name}
                userStatus="TUTEE"
                school={el.school}
                rate={el.rate}
                subjects={el.subjects}
                bio={el.bio}
                img={el.profileImage.url}
              />
            </Link>
          ))}
        </div>
      </div>
      <ButtonTop />
    </div>
  );
};

export default TuteeList;
