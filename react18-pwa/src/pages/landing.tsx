import { apis } from '@/lib/apis';
import { inintChannel } from '@/lib/channel';
import { SocketContext } from '@/lib/socket-context';
import { senderInfo } from '@/lib/user';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();
  const socket = useContext(SocketContext);
  const state: InitAccessInfo = {
    inflowType: 'ARS',
    userId: 'SbMRn5Y5w/g93xLLoM1ZJQ==',
    chatBotType: '0262561234',
  };

  const init = async () => {
    const sender = await senderInfo(state);
    const channelId = await apis.channel.append(state);
    const ticketInfo = await inintChannel(channelId, sender);
    await socket.run(sender, ticketInfo);

    if (socket.isReady) {
      navigate(`/chat/${socket.ticketId}`);
    }
  };

  useEffect(() => {
    init();
  });

  return <>landing</>;
}

export default Landing;
