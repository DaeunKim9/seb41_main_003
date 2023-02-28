import styles from './Home.module.css';
import topBanner from '../assets/top_banner.png';
import searchIllust from '../assets/search.png';
import messageIllust from '../assets/message.png';
import tutoringIllust from '../assets/tutoring.png';
import searchMock1 from '../assets/search_mock1.png';
import searchMock2 from '../assets/search_mock2.png';
import messageMock1 from '../assets/message_mock1.png';
import messageMock2 from '../assets/message_mock2.png';
import tutoringMock1 from '../assets/tutoring_mock1.png';
import tutoringMock2 from '../assets/tutoring_mock2.png';
import tutoringMock3 from '../assets/tutoring_mock3.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.testBtn}
        onClick={() => setIsActive((prev) => !prev)}
      >
        isActive
      </button>
      <div className={styles.topBanner}>
        <img src={topBanner} alt="top_image" />
        <span className={styles.title}>
          <p>
            매칭으로 끝내지 않는다! <br /> 비대면 통합 과외 관리 서비스
          </p>
          <svg
            width="216"
            height="55"
            viewBox="0 0 216 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.21417 36.0793C4.31069 36.0793 6.50347 36.0508 8.79252 35.9937V20.5587H17.938V35.6996C23.5109 35.4321 28.2869 35.0453 32.266 34.539L32.8489 41.4115C28.2499 42.2228 23.6065 42.7586 18.9435 43.016C14.1087 43.3012 9.02249 43.442 3.68494 43.4385H0.759451L0 36.1114C0.969816 36.1114 1.70787 36.1007 2.21417 36.0793ZM30.9236 10.3114C30.9236 14.2905 30.8362 17.7401 30.6615 20.6603C30.4649 23.9642 30.0864 27.2548 29.5277 30.5171L20.3822 29.8218C20.892 26.6557 21.2218 23.7676 21.3716 21.1577C21.5213 18.5477 21.6194 15.649 21.6658 12.4614H2.67412V5.06479H30.9236V10.3114ZM34.2288 0H43.738V21.0828H50.1559V28.8271H43.738V53.8729H34.2288V0Z"
              fill="white"
            />
            <path
              d="M77.0147 4.81342C79.227 5.90052 81.1058 7.56318 82.4538 9.62685C83.7872 11.6982 84.481 14.1164 84.4487 16.5796C84.4683 18.5732 84.0232 20.5439 83.1487 22.3356C82.2742 24.1273 80.9944 25.6906 79.4107 26.9017C77.7772 28.158 75.9046 29.068 73.9073 29.5758V35.6728C78.489 35.384 82.4699 35.0061 85.85 34.539L86.5453 41.235C81.3354 42.25 76.0622 42.9076 70.7626 43.2031C65.4143 43.5026 59.5509 43.6613 53.1722 43.6791L52.1025 36.2237C56.6878 36.2237 60.8434 36.1755 64.5693 36.0793V29.5598C62.5816 29.0481 60.7185 28.1384 59.0927 26.8856C57.5211 25.6883 56.2412 24.1505 55.3489 22.3878C54.4597 20.5827 54.0141 18.5915 54.0493 16.5796C54.0192 14.1129 54.7229 11.6928 56.0709 9.62685C57.4432 7.56019 59.3433 5.89827 61.5743 4.81342C63.9811 3.64833 66.6205 3.04311 69.2945 3.04311C71.9685 3.04311 74.6078 3.64833 77.0147 4.81342ZM64.1254 19.6441C64.6212 20.4795 65.3549 21.148 66.2326 21.5641C67.176 22.01 68.2056 22.2437 69.249 22.2487C70.8448 22.2952 72.4026 21.7569 73.6292 20.7352C74.2078 20.214 74.6633 19.5709 74.963 18.8522C75.2627 18.1336 75.399 17.3573 75.3621 16.5796C75.3621 14.7505 74.7738 13.3706 73.6453 12.4133C72.4013 11.4203 70.8391 10.9128 69.249 10.9853C67.6951 10.9144 66.1703 11.4233 64.9704 12.4133C63.9008 13.3653 63.3339 14.7505 63.366 16.5796C63.331 17.6516 63.5939 18.7124 64.1254 19.6441ZM88.5829 0H97.8728V54.0494H88.5829V0Z"
              fill="white"
            />
            <path
              d="M125.074 24.0671C125.888 26.6143 127.194 28.9767 128.92 31.0198C130.814 33.2594 133.191 35.0405 135.872 36.229L130.808 43.278C128.183 42.1749 125.836 40.5036 123.935 38.3844C121.983 36.1942 120.425 33.6826 119.33 30.961C118.227 33.9057 116.596 36.6243 114.517 38.9834C112.494 41.2515 109.978 43.0261 107.163 44.1712L102.152 36.9831C104.943 35.8389 107.415 34.0349 109.356 31.7258C111.166 29.5838 112.535 27.1044 113.383 24.4308C114.185 21.8769 114.607 19.2189 114.634 16.5421V15.8415H104.253V8.44488H114.56V1.39589H123.94V8.44488H134.102V15.8415H123.94V16.5421C123.923 19.0943 124.305 21.6335 125.074 24.0671ZM137.102 0H146.478V20.211H153.757V27.9553H146.478V53.8729H137.102V0Z"
              fill="white"
            />
            <path
              d="M159.191 12.7716C160.259 10.0659 162.066 7.71438 164.405 5.98469C166.597 4.41199 169.233 3.58006 171.93 3.61007C174.584 3.58417 177.175 4.41716 179.316 5.98469C181.622 7.72995 183.401 10.0788 184.456 12.7716C185.754 16.0215 186.387 19.4987 186.317 22.9975C186.391 26.5383 185.759 30.0584 184.456 33.3517C183.404 36.0582 181.626 38.4217 179.316 40.1814C177.179 41.7576 174.586 42.5949 171.93 42.5667C169.226 42.6027 166.581 41.7663 164.389 40.1814C162.054 38.4332 160.254 36.0678 159.191 33.3517C157.877 30.061 157.239 26.5398 157.313 22.9975C157.243 19.4972 157.882 16.0188 159.191 12.7716ZM166.801 31.2605C167.775 33.1146 169.155 34.0327 170.941 34.0149C172.609 34.0149 173.923 33.1021 174.882 31.2766C175.842 29.451 176.332 26.6913 176.353 22.9975C176.353 19.3714 175.863 16.6348 174.882 14.7879C173.902 12.941 172.588 12.0282 170.941 12.0496C169.192 12.0496 167.823 12.9267 166.833 14.7237C165.844 16.5207 165.347 19.243 165.347 22.8317C165.347 26.6004 165.831 29.41 166.801 31.2605ZM200.527 54.0494H191.093V0H200.527V54.0494Z"
              fill="white"
            />
            <path
              d="M207.512 52.9477C206.662 52.4509 205.955 51.7436 205.458 50.8939C204.957 50.0321 204.696 49.0512 204.704 48.054C204.697 47.0705 204.958 46.1035 205.458 45.2569C205.958 44.4178 206.665 43.7215 207.512 43.2352C208.374 42.732 209.354 42.4697 210.352 42.4758C211.322 42.4771 212.273 42.7395 213.106 43.2352C213.962 43.7319 214.682 44.4318 215.203 45.2729C215.731 46.1097 216.007 47.0806 216 48.07C216.007 49.0714 215.735 50.0548 215.214 50.91C214.699 51.7558 213.977 52.457 213.117 52.9477C212.279 53.4415 211.325 53.7018 210.352 53.7018C209.355 53.7098 208.374 53.4493 207.512 52.9477Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
      <section className={styles.container}>
        <section className={styles.searchContainer}>
          <article
            className={`${styles.searchTitle} ${isActive && styles.active}`}
          >
            <div className={styles.text}>
              <h4>
                나에게 맞는 <br /> 비대면 과외를 찾아보세요
              </h4>
              <p>입소문을 통해서만 연결될 수 있는 과외는 NO!</p>
              <p>
                과외차이에서는 <br /> 후기와 별점, 튜터의 소개로 구성된 프로필을
                확인하고 <br /> 본인에게 가장 잘 맞는 과외를 찾을 수 있습니다.
              </p>
            </div>
            <img src={searchIllust} alt="search_illust" />
          </article>
          <div className={styles.pageView}>
            <div
              className={`${isActive && styles.active} ${styles.mock} ${
                styles.leftUp
              }`}
            >
              <img src={searchMock1} alt="search_tutor" />
              <p>
                당신에게 필요한
                <br />
                비대면 과외를 찾아볼 수 있습니다
              </p>
            </div>
            <div
              className={`${isActive && styles.active} ${styles.mock} ${
                styles.rightDown
              }`}
            >
              <p>
                선생님이신가요?
                <br />
                당신을 필요로 하는 학생을 찾아보세요
              </p>
              <img src={searchMock2} alt="search_tutee" />
            </div>
          </div>
        </section>
        <section className={styles.messageContainer}>
          <article
            className={`${styles.messageTitle} ${isActive && styles.active}`}
          >
            <div className={styles.text}>
              <h4>
                원하는 상대에게 <br /> 메세지를 보내세요
              </h4>
              <p>
                연락처를 오픈하지 않고도 <br /> 상대방과 대화할 수 있습니다.
              </p>
              <p>원하는 조건에 대한 상세한 이야기를 나눠보세요!</p>
            </div>
            <img src={messageIllust} alt="message_illust" />
          </article>
          <div className={styles.pageView}>
            <div
              className={`${isActive && styles.active} ${styles.mock} ${
                styles.rightUp
              }`}
            >
              <p>
                원하는 상대에게 자유롭게
                <br />
                메세지를 보내고,
              </p>
              <img src={messageMock1} alt="send_message" />
            </div>
            <div
              className={`${isActive && styles.active} ${styles.mock} ${
                styles.leftDown
              }`}
            >
              <img src={messageMock2} alt="request_match" />
              <p>매칭 요청을 보내 과외를 시작하세요</p>
            </div>
          </div>
        </section>
        <section className={styles.tutoringContainer}>
          <article
            className={`${styles.tutoringTitle} ${isActive && styles.active}`}
          >
            <div className={styles.text}>
              <h4>
                과외를 시작하고 <br /> 매칭된 과외를 관리하세요
              </h4>
              <p>
                과외차이에서는 <br /> 매칭된 과외를 관리할 수 있는 기능을 제공해
              </p>
              <p>
                진행 중이거나 이전에 받은 수업에 대한 <br /> 지속적인 관리 및
                확인이 가능합니다.
              </p>
            </div>
            <img src={tutoringIllust} alt="tutoring_illust" />
          </article>
          <div className={styles.pageView}>
            <div
              className={`${isActive && styles.active} ${styles.mock} ${
                styles.center
              }`}
            >
              <p>
                과외 관리 페이지에서
                <br />
                작성된 일지와 과외 정보를
                <br />
                한눈에 확인할 수 있습니다.{' '}
              </p>
              <img src={tutoringMock1} alt="tutoring" />
            </div>
            <div
              className={`${isActive && styles.active} ${styles.mock} ${
                styles.leftUp
              }`}
            >
              <img src={tutoringMock2} alt="write_journal" />
              <p>
                선생님은 과외 일지를 작성해
                <br />
                진행 상황을 공유하고,
              </p>
            </div>
            <div
              className={`${isActive && styles.active} ${styles.mock} ${
                styles.rightDown
              }`}
            >
              <p>
                학생은 일지를 통해
                <br />
                공지사항과 과제를 확인하고,
                <br />
                수업 내용을 복습할 수 있습니다.
              </p>
              <img src={tutoringMock3} alt="read_journal" />
            </div>
          </div>
        </section>
      </section>
      <div className={styles.bottomBanner}>
        <svg
          width="400"
          height="100"
          viewBox="0 0 400 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.09658 66.7524C7.97546 66.7524 12.0325 66.6997 16.2676 66.5941V38.0368H33.1882V66.0499C43.4989 65.5551 52.3352 64.8394 59.6972 63.9026L60.7758 76.6179C52.2668 78.119 43.6757 79.1103 35.0485 79.5864C26.1033 80.1141 16.6931 80.3747 6.81773 80.3681H1.40511L0 66.8118C1.79431 66.8118 3.15984 66.792 4.09658 66.7524ZM57.2135 19.0778C57.2135 26.4397 57.0519 32.8221 56.7287 38.2248C56.3649 44.3376 55.6646 50.4258 54.6309 56.4615L37.7103 55.1751C38.6536 49.3172 39.2638 43.9739 39.5409 39.1451C39.8179 34.3162 39.9993 28.9531 40.0851 23.0556H4.94756V9.37067H57.2135V19.0778ZM63.3287 0H80.9222V39.0065H92.7964V53.3347H80.9222V99.6735H63.3287V0Z"
            fill="white"
          />
          <path
            d="M142.49 8.9056C146.583 10.9169 150.059 13.9931 152.553 17.8112C155.02 21.6436 156.304 26.1175 156.244 30.6748C156.28 34.3633 155.457 38.0095 153.839 41.3244C152.221 44.6393 149.853 47.5317 146.923 49.7724C143.9 52.0969 140.436 53.7804 136.741 54.72V66.0004C145.217 65.4661 152.583 64.7668 158.836 63.9026L160.123 76.2913C150.484 78.1693 140.727 79.3859 130.922 79.9327C121.027 80.4868 110.179 80.7804 98.3772 80.8134L96.3982 67.0196C104.882 67.0196 112.57 66.9305 119.464 66.7524V54.6903C115.786 53.7436 112.339 52.0605 109.331 49.7427C106.423 47.5274 104.055 44.6823 102.405 41.4209C100.759 38.0813 99.935 34.3972 100 30.6748C99.9443 26.111 101.246 21.6336 103.74 17.8112C106.279 13.9876 109.795 10.9127 113.922 8.9056C118.375 6.75 123.259 5.63024 128.206 5.63024C133.153 5.63024 138.037 6.75 142.49 8.9056ZM118.642 36.3447C119.56 37.8903 120.917 39.1271 122.541 39.8971C124.286 40.722 126.191 41.1543 128.122 41.1637C131.074 41.2496 133.956 40.2537 136.226 38.3633C137.296 37.3992 138.139 36.2093 138.694 34.8797C139.248 33.55 139.5 32.1138 139.432 30.6748C139.432 27.2907 138.344 24.7378 136.256 22.9666C133.954 21.1294 131.064 20.1905 128.122 20.3246C125.247 20.1934 122.426 21.1349 120.206 22.9666C118.227 24.7279 117.178 27.2907 117.237 30.6748C117.173 32.6584 117.659 34.621 118.642 36.3447ZM163.893 0H181.081V100H163.893V0Z"
            fill="white"
          />
          <path
            d="M231.407 44.528C232.912 49.2408 235.33 53.6115 238.522 57.3917C242.026 61.5352 246.424 64.8304 251.385 67.0295L242.015 80.0713C237.159 78.0304 232.816 74.9381 229.299 71.0172C225.688 66.965 222.806 62.3183 220.78 57.2828C218.739 62.7309 215.721 67.7608 211.874 72.1255C208.131 76.3218 203.477 79.6052 198.268 81.7237L188.997 68.4247C194.161 66.3077 198.734 62.9701 202.325 58.6978C205.675 54.7347 208.208 50.1475 209.776 45.2009C211.26 40.4758 212.04 35.5579 212.092 30.6056V29.3093H192.885V15.6244H211.953V2.58262H229.309V15.6244H248.11V29.3093H229.309V30.6056C229.276 35.3275 229.984 40.0254 231.407 44.528ZM253.661 0H271.007V37.3936H284.475V51.7218H271.007V99.6735H253.661V0Z"
            fill="white"
          />
          <path
            d="M294.528 23.6295C296.505 18.6234 299.848 14.2728 304.176 11.0726C308.23 8.16289 313.108 6.62368 318.098 6.6792C323.008 6.63129 327.801 8.17244 331.763 11.0726C336.03 14.3016 339.321 18.6473 341.273 23.6295C343.674 29.6423 344.845 36.0757 344.716 42.549C344.854 49.1001 343.683 55.6128 341.273 61.7059C339.327 66.7134 336.036 71.0863 331.763 74.342C327.808 77.2582 323.012 78.8074 318.098 78.7552C313.094 78.8218 308.202 77.2743 304.146 74.342C299.826 71.1075 296.495 66.7312 294.528 61.7059C292.098 55.6177 290.917 49.1029 291.055 42.549C290.925 36.0728 292.107 29.6374 294.528 23.6295ZM308.609 57.8369C310.41 61.2672 312.963 62.9659 316.268 62.9329C319.355 62.9329 321.786 61.2441 323.56 57.8666C325.335 54.4891 326.242 49.3832 326.281 42.549C326.281 35.8401 325.374 30.7771 323.56 27.36C321.746 23.9429 319.315 22.2541 316.268 22.2937C313.032 22.2937 310.499 23.9165 308.668 27.2412C306.838 30.566 305.917 35.6026 305.917 42.2422C305.917 49.215 306.814 54.4132 308.609 57.8369ZM371.007 100H353.552V0H371.007V100Z"
            fill="white"
          />
          <path
            d="M383.931 97.9617C382.359 97.0426 381.05 95.734 380.131 94.162C379.203 92.5675 378.721 90.7526 378.736 88.9077C378.722 87.088 379.205 85.299 380.131 83.7326C381.055 82.1801 382.364 80.892 383.931 79.9922C385.524 79.0611 387.339 78.5758 389.185 78.5871C390.979 78.5896 392.739 79.075 394.281 79.9922C395.864 80.9112 397.196 82.206 398.16 83.7623C399.137 85.3105 399.648 87.1068 399.634 88.9374C399.647 90.79 399.143 92.6095 398.18 94.1917C397.227 95.7566 395.892 97.0539 394.301 97.9617C392.751 98.8753 390.984 99.3571 389.185 99.357C387.34 99.3718 385.525 98.8898 383.931 97.9617Z"
            fill="white"
          />
        </svg>
        <p>지금 시작하기</p>
        <div className={styles.btnContainer}>
          <button
            className={styles.newUser}
            onClick={() => {
              navigate('/signup');
            }}
          >
            새로운 회원
          </button>
          <button
            className={styles.exUser}
            onClick={() => {
              navigate('/login');
            }}
          >
            기존 회원
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
