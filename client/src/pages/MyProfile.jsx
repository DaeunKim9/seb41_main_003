import styles from './MyProfile.module.css';
import { useState, useCallback } from 'react';
import { ProfileContents, MyProfileCard } from '../components/profileSection';
import { ConfirmModal } from '../components/Modal.jsx';
import DummyData from '../components/profileSection/DummyData';
import { ButtonTop } from '../components/Button';

const MyProfile = () => {
  const [user, setUser] = useState(DummyData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnnounceOn, setIsAnnounceOn] = useState(DummyData.wantedStatus);

  const modaInnerHandler = (e) => {
    if (e.target.name === 'yes') {
      setIsAnnounceOn((prev) => (prev === 'REQUEST' ? 'NONE' : 'REQUEST'));
      setIsModalOpen((prev) => !prev);
      //TODO:바뀐 유저의 공고 상태를 서버에 전송 해야함
    } else {
      setIsModalOpen((prev) => !prev);
    }
  };

  const modalOpenOnHandler = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  let modalText = `공고 상태를 변경하시겠습니까?`;

  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <div className={styles.container}>
          <MyProfileCard
            user={user}
            isAnnounceOn={isAnnounceOn}
            setIsAnnounceOn={setIsAnnounceOn}
            modalOpenOnHandler={modalOpenOnHandler}
          />
          <ProfileContents user={user} />
        </div>
      </div>
      {isModalOpen && (
        <div className={styles.modalWrapper}>
          <ConfirmModal modalHandler={modaInnerHandler} text={modalText} />
        </div>
      )}
      <ButtonTop />
    </div>
  );
};

export default MyProfile;
