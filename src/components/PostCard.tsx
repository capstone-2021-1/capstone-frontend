import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import TPost from 'src/types/Post'
import TStore from 'src/types/Store'
import styled from 'styled-components'
import {
  AbsolutePositionImage,
  ImageRatioWrapper,
  SkeletonGradient,
  SkeletonImage,
  SkeletonText,
} from './FoodCard'
import { FlexContainerBetween, FlexContainerAlignCenter } from './styles/FlexContainer'
import { GridContainerGap } from './styles/GridContainer'

const SkeletonImageRound = styled(SkeletonGradient)`
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`

const ShadowingLi = styled.li`
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
  border-radius: 3px;
`

const GridContainerPadding = styled(GridContainerGap)`
  padding: 1rem;
`

const StyledImg = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  border-radius: 50%;
`

const NoMarginH3 = styled.h3`
  margin: 0;
`

const FlexContainerBetweenPadding = styled(FlexContainerBetween)`
  padding: 1rem;
`

const GridContainerColumn3 = styled(GridContainerGap)`
  grid-template-columns: repeat(3, auto);
  align-items: center;
`

const GridContainerColumn2 = styled(GridContainerGap)`
  grid-template-columns: repeat(2, auto);
`

const AbsolutePosition = styled.div`
  position: absolute;
  bottom: 0;
`

const NoMarginP = styled.p`
  margin: 0;
`

type Props = {
  post: TPost
  store: TStore
  loading: boolean
}

function PostCard({ post, store, loading }: Props) {
  if (loading) {
    return (
      <ShadowingLi>
        <FlexContainerBetweenPadding>
          <GridContainerColumn3>
            <SkeletonImageRound />
            <SkeletonText width="min(10rem, 30vw)" />
          </GridContainerColumn3>
        </FlexContainerBetweenPadding>

        <ImageRatioWrapper paddingTop="100%">
          <SkeletonImage />
        </ImageRatioWrapper>

        <GridContainerPadding>
          <SkeletonText height="1.5rem" />
          <SkeletonText width="30%" />
          <SkeletonText width="80%" />
          <SkeletonText width="50%" />
          <input placeholder="댓글 달기..." disabled={true} />
        </GridContainerPadding>
      </ShadowingLi>
    )
  }

  return (
    <ShadowingLi>
      <FlexContainerBetweenPadding>
        <GridContainerColumn3>
          <StyledImg src={store.imageUrl} alt="store profile" />
          <NoMarginH3>{store.name}</NoMarginH3>
          <div>{store.location}</div>
        </GridContainerColumn3>
        <div>...</div>
      </FlexContainerBetweenPadding>

      <ImageRatioWrapper paddingTop="100%">
        <AbsolutePositionImage src={post.imageUrl[0]} alt="post" />
        <AbsolutePosition>Photo location indicator</AbsolutePosition>
      </ImageRatioWrapper>

      <GridContainerPadding>
        <FlexContainerBetween>
          <GridContainerColumn2>
            <FlexContainerAlignCenter>
              <FavoriteBorderIcon /> {post.likeCount}
            </FlexContainerAlignCenter>
            <FlexContainerAlignCenter>
              <ChatBubbleOutlineRoundedIcon /> {post.commentCount}
            </FlexContainerAlignCenter>
          </GridContainerColumn2>
          <OpenInNewIcon />
        </FlexContainerBetween>
        <NoMarginP>
          깔끔히 정리된 서재는
          <br /> 일의 능률을 올려주죠.
          <br />
          <br />
          넉넉한 수납장만 있다면
          <br /> 더 능률적인 홈오피스를 만들 수 있어요.
          <br />
          <br />
          IKEA 매장과 IKEA.kr에서
          <br /> 더 많은 홈퍼니싱 아이디어를 확인하세요!
        </NoMarginP>
        <div>더 보기</div>
        <div>작성일</div>
        <ul>
          <li>
            <div>댓글 작성자</div>
            <p>댓글 내용</p>
            <div>댓글 좋아요</div>
          </li>
          <li>
            <div>댓글 작성자2</div>
            <p>댓글 내용2</p>
          </li>
        </ul>
        <input placeholder="댓글 달기..." />
      </GridContainerPadding>
    </ShadowingLi>
  )
}

export default PostCard
