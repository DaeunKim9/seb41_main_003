import styles from './Message.module.css';
import MessageList from '../components/Message/MessageList';
import MessageContent from '../components/Message/MessageContent';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import CurrentRoomIdState from '../recoil/currentRoomId.js';
import ModalState from '../recoil/modal.js';
import { useNavigate } from 'react-router-dom';
import Profile from '../recoil/profile';

const Message = () => {
  const [messageList, setMessageList] = useState([0]);
  const [messageRoom, setMessageRoom] = useState({
    messages: [
      {
        messageContent: '※ 대화 상대를 선택해주세요 ※',
      },
    ],
  });
  const [pageInfo, setPageInfo] = useState({});
  const CurrentRoomId = useRecoilValue(CurrentRoomIdState);
  const resetCurrentRoomId = useResetRecoilState(CurrentRoomIdState);
  const { profileId } = useRecoilValue(Profile);
  const setModal = useSetRecoilState(ModalState);
  const resetModal = useResetRecoilState(ModalState);

  const navigate = useNavigate();

  const noListAlertModal = {
    isOpen: true,
    modalType: 'handlerAlert',
    props: {
      text: `대화상대가 없습니다.

      ${
        sessionStorage.getItem('userStatus') === 'TUTOR' ? '튜티' : '튜터'
      } 프로필의 문의하기 버튼을 눌러서 대화를 시작해주세요.`,
      modalHandler: () => {
        navigate(-1);
        resetModal();
      },
    },
  };

  const getMessageList = async () => {
    await axios
      .get(`/messages/${profileId}`)
      .then((res) => {
        setMessageList(res.data.data);
        setPageInfo(res.data.pageInfo);
        console.log(res.data.data, '메세지 리스트 API');
      })
      .catch((err) => console.log(err, 'getMessageList'));
  };

  useEffect(() => {
    getMessageList();
  }, []);

  useEffect(() => {
    return () => {
      resetCurrentRoomId();
    };
  }, []);

  useEffect(() => {
    if (messageList.length === 0) setModal(noListAlertModal);
  }, [messageList]);

  useEffect(() => {
    getMessageRoom();
  }, [CurrentRoomId]);

  //대화 화면 조회 API
  const getMessageRoom = async () => {
    CurrentRoomId !== 0 &&
      (await axios
        .get(`/messages/rooms/${profileId}/${CurrentRoomId}`)
        .then((res) => {
          setMessageRoom(res.data.data);
          console.log(res.data.data, 'MessageRoom API');
        })
        .catch((err) => console.log(err, 'getMessageRoom')));
  };

  const cancelAlertProps = {
    isOpen: true,
    modalType: 'redAlert',
    props: {
      text: `상담이 취소되었습니다.`,
      modalHandler: () => {
        location.reload();
      },
    },
  };

  const delMessageRoom = async () => {
    await axios
      .delete(`/messages/rooms/${CurrentRoomId}`)
      .then(() => {
        console.log('현재 대화방 삭제');
        setModal(cancelAlertProps);
      })
      .catch(() => {
        setModal({
          isOpen: true,
          modalType: 'alert',
          props: {
            text: '대화 상대와 매칭중인 과외가 있다면\n상담 취소를 할 수 없습니다.',
          },
        });
      });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>메세지함</h2>
        <div className={styles.message}>
          <MessageList
            messageList={messageList}
            pageInfo={pageInfo}
            setMessageList={setMessageList}
            setPageInfo={setPageInfo}
          />
          <MessageContent
            messageRoom={messageRoom}
            getMessageList={getMessageList}
            getMessageRoom={getMessageRoom}
            delMessageRoom={delMessageRoom}
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
