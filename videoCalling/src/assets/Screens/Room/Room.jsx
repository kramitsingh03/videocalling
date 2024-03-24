import React from 'react'
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
import { useParams } from "react-router-dom"
const Room = () => {
    const { roomId } = useParams();
    const myMeeting = async (element) => {
        const appID = 260489748; // app id must be a number
        const serverSecret = "48564d79ac940b30d3b6cb06769e8818"
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(),"amit");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
            showScreenSharingButton : true,  //here it is use for screen sharing
        })
    };
    return (
        <div>
            <div ref={myMeeting} />
        </div>
    )
}

export default Room