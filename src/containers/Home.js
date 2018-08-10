import React from 'react';
import { connect } from 'react-redux';
import * as Scroll from 'react-scroll';
import { Parallax } from 'react-scroll-parallax';
import Instafeed from 'react-instafeed';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderInitialized: false,
    }
  }



  render() {
    const instafeedTarget = 'instafeed';

    return (
      <div className="container">
        <div className="background01">
          <div className="div" name="section01">
            <div className="section01 row" id="section01">
              <div className="sub-section01 col-sm-12 col-md-6">
                <div className="sub-section-wrapper">
                  <div className="images-wrapper">
                    <Parallax className="" offsetYMax={20} offsetYMin={-20} slowerScrollRate tag="figure">

                    </Parallax>
                    <img className="img-fluid image01" src="images/bowl.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className="sub-section02 col-sm-12 col-md-6">
                <div className="sub-section-wrapper">
                  <div className="title">
                    <a href="https://smartstore.naver.com/platishop/products/2995917872?NaPm=ct%3Djknh2tsw%7Cci%3D61de4837746f30d0457f0e4d64b24bc8bd8728b3%7Ctr%3Dsls%7Csn%3D720395%7Chk%3D5194fb63609d277889c6f5924dd459d0f4c122e7">
                      <h2>간편하게 꺼내먹는 자연의 선물</h2>
                      <h1>플라티 아보카도 퓨레</h1>
                      <div className="section-nav">
                        <div className="section-nav-wrapper">
                          <div className="breakline"></div>
                          <h4>상품보기</h4>
                          <div className="breakline"></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div" name="section01">
            <div className="section02 row" id="section01">
              <div className="sub-sections sub-section01 col-sm-12 col-md-6">
                <div className="sub-section-wrapper">
                  <div className="title">
                    <Parallax className="" offsetYMax={0} offsetYMin={0} slowerScrollRate>
                      <h3>QUALITY & CERTIFICATION</h3>
                      <h1><span className="plati-color"></span>현지 그대로의 최상급 아보카도</h1>
                      <h3>다수의 아보카도 농장을 직접 방문하고 정밀한 심사를 거쳐 선택했어요.</h3>
                      <h3>현지 농장은 세계식품안전협회의 식품위생등급 중 가장 높은 등급을 취득한 농장이에요.</h3>
                      <h3>첨가물과 방부제가 전혀 들어가지 않아 건강하고 신선한 아보카도의 맛을 즐길 수 있답니다.</h3>
                      <div className="section-nav">
                        <div className="section-nav-wrapper">
                          <div className="breakline"></div>
                          <h4>맛과인증</h4>
                          <div className="breakline"></div>
                        </div>
                      </div>
                    </Parallax>
                  </div>
                </div>
              </div>
              <div className="sub-sections sub-section02 col-sm-12 col-md-6">
                <div className="sub-section-wrapper">
                  <div className="images-wrapper">
                    <img  className="img-fluid" src="images/avocado01.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div" name="section02">
            <div className="section03 row" id="section02">
              <div className="sub-sections sub-section02 col-sm-12 col-md-6">
                <div className="sub-section-wrapper">
                  <div className="images-wrapper">
                    <img className="img-fluid" src="images/avocado02.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className="sub-sections sub-section01 col-sm-12 col-md-6">
                <div className="sub-section-wrapper">
                  <div className="title">
                    <Parallax className="" offsetYMax={0} offsetYMin={0} slowerScrollRate>
                      <h3>PRODUCTION PROCESS</h3>
                      <h1>언제나 신선하고 편리하게</h1>
                      <h3>인공적인 보존처리를 하지 않고 비가열고압살균 공법을 적용해 영양분과 맛을 완벽히 보존했어요.</h3>
                      <h3>공기 통과율이 매우 낮은 EVOH 수지로 포장해 상품의 보존성을 높였습니다.<span className="font-bold"> (*개봉 전 최대 40일 까지 냉장보관하셔도 무관하지만 개봉 후에는 최대한 빨리 드실 수록 좋아요.)</span></h3>
                      <h3>씨와 껍질을 손질해야 하는 번거로움없이 언제 어디서든 간편하게 아보카를 즐기실 수 있답니다.</h3>
                      <div className="section-nav">
                        <div className="section-nav-wrapper">
                          <div className="breakline"></div>
                          <h4>제조과정</h4>
                          <div className="breakline"></div>
                        </div>
                      </div>
                    </Parallax>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background02">
          <div className="div" name="section04">
            <div className="section04 row" id="section04">
              <div className="sub-sections sub-section02 col-sm-12 col-md-6">
                <div className="sub-section-wrapper">
                  <div className="title">
                    <h3>COMPANY</h3>
                    <h1>아보카도, 누구보다 좋아합니다!</h1>
                    <h3>플라티 멤버들은 중남미에서 자라면서 자연스럽게 아보카도 음식을 먹어왔어요.</h3>
                    <h3>우리들이 맛보았던 중남미 아보카도 그대로의 맛을 여러분에게도 알려드리고 싶어서 준비했어요.</h3>
                    <h3>건강한 먹을거리가 가족과 사회 그리고 모든 사람들이의 삶에 행복을 더할 수 있다는 신념으로 신선한 아보카도로 세계를 행복하게 만드는 플라티가 되려고 합니다.</h3>
                    <h3>언제나 신선하고 건강한 먹거리를 약속할 수 있는 솔직한 플라티가 되겠습니다.</h3>
                    <div className="section-nav">
                      <div className="section-nav-wrapper">
                        <div className="breakline"></div>
                        <h4>회사소개</h4>
                        <div className="breakline"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-sections sub-section01 col-xs-12 col-md-6">
                <div className="sub-section-wrapper">
                  <div className="images-wrapper">
                    <img src="images/avocado03.png" alt="" className=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div" name="section05">
            <div className="section05 row" id="section05">
              <div className="section-title col-xs-12 col-sm-12">
                <div className="title">
                  <h3>DEFROST & STORAGE METHOD</h3>
                  <div className="vertical-line2"></div>
                  <h1>해동 및 보관방법</h1>
                </div>
              </div>
              <div className="sub-sections sub-section01 col-xs-12 col-sm-6">
                <div className="sub-section-wrapper">
                  <div className="title center">
                    <img className="img-fluid" src="images/icon01.png" alt=""/>
                    <h3 className="font-bold font-sizeup">해동</h3>
                    <h3>플라티 아보카도 퓨레는 냉동 제품입니다.</h3>
                    <h3>하루 전 냉장고에 넣어두고 해동시켜주세요.</h3>
                    <h3>뜨거운 물이나 상온에서 해동하면 맛이 변질될 수 있어요.</h3>
                  </div>
                </div>
              </div>
              <div className="sub-sections sub-section02 col-xs-12 col-sm-6">
                <div className="sub-section-wrapper">
                  <div className="title center">
                    <img className="img-fluid" src="images/icon02.png" alt=""/>
                    <h3 className="font-bold font-sizeup">보관방법</h3>
                    <h3>팩의 한쪽 끝을 가위로 조금 잘라 드세요.</h3>
                    <h3>빈 부분을 말아 집게로 고정해 냉장 보관해 주세요.</h3>
                    <h3>공기와의 접촉이 적어야 갈변을 막을 수 있어요.</h3>
                    <h3>해동 후 재냉동은 불가합니다.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div" name="section06">
            <div className="section06 row" id="section06">
              <div className="section-title col-xs-12 col-sm-12">
                <div className="title">
                  <h3>COOKING WITH AVOCADO</h3>
                  <div className="vertical-line2"></div>
                  <h1>이렇게 드시면 맛있어요</h1>
                </div>
              </div>
              <div className="sub-sections sub-section01 col-xs-12 col-sm-12">
                <div className="sub-section-wrapper">
                  <div className="images-wrapper">
                    <img className="img-fluid" src="images/avocado06.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className="sub-sections sub-section02 col-xs-12 col-sm-12">
                <div className="sub-section-wrapper">
                  <div className="title left">
                    <h3 className="font-bold font-sizeup">명란 아보카도 덮밥</h3>
                    <h3>명란젓을 반으로 자른 후 숟가락으로 발라내고, 아보카도와 계란프라이를 올린 후 참기름, 김, 깨소금, 후추로 간을 해서 먹으면 든든한 한끼 완성!</h3>
                  </div>
                </div>
              </div>
              <div className="sub-sections sub-section03  col-xs-12 col-sm-12">
                <div className="sub-section-wrapper">
                  <div className="images-wrapper">
                    <img className="img-fluid" src="images/avocado05.jpg" alt=""/>
                  </div>
                </div>
              </div>
              <div className="sub-sections sub-section02 col-xs-12 col-sm-12">
                <div className="sub-section-wrapper">
                  <div className="title left">
                    <h3 className="font-bold font-sizeup">아보카도 바나나 우유 스무디</h3>
                    <h3>바나나 1/2개, 우유 1.5컵, 그리고 아보카도 50g을 믹서기에 간다음 꿀까지 추가해 주면 건강하면서 든든한 스무디가 완성됩니다.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div" name="section07">
            <div className="section07 row" id="section07">
              <div className="section-title col-xs-12 col-sm-12">
                <div className="title center">
                  <h3>DELIVERY</h3>
                  <div className="vertical-line2"></div>
                  <h1>배송 관련 안내</h1>
                </div>
                <div className="title">
                  <h3>저희 제품은 신선 식품으로 분류되어 익일 도착을 원칙으로 하고 있습니다.</h3>
                  <h3>발송은 월~목요일에만 가능하며 정오 주문 건까지 당일 발송됩니다.</h3>
                  <h3>목요일 정오 이후 주문 건은 그 다음주 월요일에 발송됩니다.</h3>
                  <h3>상품 특성상 단순변심에 의한 반품이 불가합니다.</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="div" name="section07">
            <div className="section08 row justify-content-md-center" id="section08">
              <div className="section-title col-xs-12 col-sm-12">
                <div className="title">
                  <h3>PARTNERSHIP</h3>
                  <div className="vertical-line2"></div>
                  <h1>파트너쉽</h1>
                </div>
              </div>
              <div className="sub-section-wrapper col-6 col-sm-6 col-md-4">
                <div className="images-wrapper partnership">
                  <a href="">
                    <img src="images/godeat.png" alt=""/>
                    <h3>갓잇 잠실점</h3>
                  </a>
                </div>
              </div>
              <div className="sub-section-wrapper col-6 col-sm-6 col-md-4">
                <div className="images-wrapper partnership">
                  <a href="">
                    <img src="images/muchacho.png" alt="" className=""/>
                    <h3>무차초 강남점</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="div" name="section08">
            <div className="section09 row" id="section09">
                <div className="section-title col-xs-12 col-sm-12">
                  <div className="title">
                    <h3>INSTAGRAM</h3>
                    <div className="vertical-line2"></div>
                    <h1>인스타그램</h1>
                  </div>
                </div>
                <div id={instafeedTarget} className="row slider" >
                </div>
                <Instafeed
                  ref = 'instafeed'
                  limit = '12'
                  resolution = 'standard_resolution'
                  sortBy = 'most-recent'
                  target = {instafeedTarget}
                  template = {`
                  <div class="instafeed-item-wrapper col-6 col-sm-4 col-md-3">
                    <a href="{{link}}" class='instafeed-item'>
                      <div class="description">
                        <span class="likes"><i class="fas fa-heart"></i>{{likes}}</span>
                        <span class="comments"><i class="fas fa-comment"></i>{{comments}}</span>
                      </div>
                      <div class="wrapper">
                        <img src="{{image}}"/>
                      </div>
                    </a>
                  </div>
                  `}
                  userId = {`${7493332074}`}
                  clientId = '3bf45ee8325542e486a70e4ba1803758'
                  accessToken = '7493332074.3bf45ee.81816295c5ae4005b8ae89d32c9e5c1c'
                  />
            </div>
          </div>
        </div>
        <div className="background03">
          <div className="div" name="section09">
            <div className="section09 row" id="section09">
              <div className="section-title col-xs-12 col-sm-12">
                <div className="title">
                  <div className="vertical-line"/>
                  <h1>Contact Us</h1>
                  <div className="vertical-line"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
