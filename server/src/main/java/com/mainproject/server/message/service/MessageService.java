package com.mainproject.server.message.service;

import com.mainproject.server.constant.ErrorCode;
import com.mainproject.server.constant.MessageStatus;
import com.mainproject.server.constant.TutoringStatus;
import com.mainproject.server.exception.ServiceLogicException;
import com.mainproject.server.message.entity.Message;
import com.mainproject.server.message.entity.MessageRoom;
import com.mainproject.server.message.repository.MessageRepository;
import com.mainproject.server.message.repository.MessageRoomRepository;
import com.mainproject.server.profile.entity.Profile;
import com.mainproject.server.profile.repository.ProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MessageService {
    private final MessageRepository messageRepository;
    private final MessageRoomRepository messageRoomRepository;
    private final ProfileRepository profileRepository;

    public MessageRoom createMessageRoom(MessageRoom messageRoom, Message message, Long profileId) {
        messageRoom.addMessage(message);
        messageRoom.setMessageStatus(MessageStatus.UNCHECK);

        messageRoomRepository.save(messageRoom);

        return messageRoom;
    }
    public Message createMessage(Message message, Long profileId, Profile sender, Profile receiver, Long messageRoomId){
        //Optional<MessageRoom> messageRoom = messageRoomRepository.findById(messageRoomId);

        message.addSender(new Profile());
        message.addReceiver(new Profile());
        message.setReceiver(receiver);
        message.setSender(sender);

        messageRepository.save(message);

        return message;
    }



    public MessageRoom findVerifiedMessageRoom(Long messageRoomId) {

        Optional<MessageRoom> optionalMessageRoom = messageRoomRepository.findById(messageRoomId);
        MessageRoom messageRoom = optionalMessageRoom.orElseThrow(() -> new ServiceLogicException(ErrorCode.NOT_FOUND));

        return messageRoom;
    }

    Page<MessageRoom> getAllMessages(Long profileId, Pageable pageable) {
        Page<MessageRoom> messageRooms =
                messageRoomRepository.findAllByTutorProfileIdAndTuteeProfileId(profileId, profileId, pageable);

        return messageRooms;
    }

    //매칭 요청시, TUTORINGSTATUS -waiting 출력 -> 프론트 전달 일단 막 적어봐
    public void requestMatching(Message message, Long tuteeId, Long tutorId) {
    //여기서 하는게 아닌것 같긴 한데 일단 틀만 넣었어요
    }

    //매칭 취소를 고려한 메세지룸 삭제
    public void deleteMessageRoom(Long messageRoomId) {

        MessageRoom messageRoom = findVerifiedMessageRoom(messageRoomId);

        messageRoomRepository.delete(messageRoom);
    }

}


