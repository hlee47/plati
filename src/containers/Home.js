import React from 'react';
import { connect } from 'react-redux';
import * as Scroll from 'react-scroll';
let Element = Scroll.Element;

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="background01">
            <Element className="element" name="section01">
              <div className="section01 row" id="section01">
                <div className="sub-section01 col-sm-12 col-md-6">
                  <div className="sub-section-wrapper">
                    <div className="images-wrapper">
                      <img className="img-fluid image01" src="images/bowl.png" alt=""/>
                    </div>
                  </div>
                </div>
                <div className="sub-section02 col-sm-12 col-md-6">
                  <div className="sub-section-wrapper">
                    <div className="title">
                      <h2>간편하게 꺼내먹는 자연의 선물</h2>
                      <h1>플라티 아보카도 퓨레</h1>
                      <div className="section-nav">
                        <div className="section-nav-wrapper">
                          <div className="breakline"></div>
                          <h4>상품보기</h4>
                          <div className="breakline"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Element>
            <Element className="element" name="section01">
              <div className="section02 row" id="section01">
                <div className="sub-section02 col-sm-12 col-md-6">
                  <div className="sub-section-wrapper">
                    <div className="title">
                      <h3>QUALITY & CERTIFICATION</h3>
                      <h1><span className="plati-color"></span>최상급 아보카도의 맛을 건강하고 안전하게</h1>
                      <h3>중남미 여러 곳의 아보카도 농장을 직접 방문하고 심사를 거듭하여 파트너를 선택했습니다.</h3>
                      <h3>플라티의 현지 파트너는 세계식품안전협회로 부터 식품 위생 등급 중 가장 까다로운 SQF 3등급을 취득한 농장입니다.</h3>
                      <h3>플라티의 아보카도 퓨레는 첨가물과 방부제가 들어가지 않아 어린이부터 어른까지 안전하게 최상의 맛을 즐기실 수 있습니다.</h3>
                      <div className="breakline"></div>
                      <h4>All Certifications</h4>
                    </div>
                  </div>
                </div>
                <div className="sub-section01 col-sm-12 col-md-6">
                  <div className="sub-section-wrapper">
                    <div className="images-wrapper">
                      <img className="img-fluid image02" src="images/HPP.png" alt="" />
                      <img className="img-fluid image03" src="images/EVOH.png" alt="" />
                      <img className="img-fluid image04" src="images/SQF.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Element>
            <Element className="element" name="section02">
              <div className="section03 row" id="section02">
                <div className="sub-section02 col-sm-12 col-md-5">
                  <div className="sub-section-wrapper">
                    <div className="images-wrapper">
                      <img className="image05 img-fluid" src="images/avocado10.jpg" alt=""/>
                    </div>
                  </div>
                </div>
                <div className="sub-section01 col-sm-12 col-md-7">
                  <div className="sub-section-wrapper">
                    <div className="title">
                      <h3>PRODUCTION PROCESS</h3>
                      <h1><span className="plati-color"></span>완벽한 숙성, 일관된 맛, 그리고 편리한 보관</h1>
                      <h3>인공적인 보존처리를 하지 않고 비가열고압살균 공법 (High Pressure Processing)을 적용하여 영양분과 맛을 완벽히 보존하였습니다.</h3>
                      <h3>공기 통과율이 매우 낮은 EVOH 수지로 포장해 상품 보존성이 높아 사용후 남은 분량을 최대 40일 까지 냉장보관하셔도 무관합니다.</h3>
                      <h3>씨와 껍질을 분리하는 번거로움 없이 바쁜 생활 속에서도 언제 어디서든 간편하게 최상의 맛을 즐기실 수 있습니다.</h3>
                      <div className="breakline"></div>
                      <h4>Production Process </h4>
                    </div>
                  </div>
                </div>
              </div>
            </Element>
          </div>
          <div className="background02">
            <Element className="element" name="section03">
              <div className="section04 row" id="section03">
                <div className="sub-section02 col-sm-12 col-md-7">
                  <div className="sub-section-wrapper">
                    <div className="title">
                      <h3>COMPANY</h3>
                      <h1><span className="plati-color"></span>아보카도와 사랑에 빠진 세 청년</h1>
                      <h3>유년시절을 중남미에서 보내면서 아보카도를 먹고 자랐습니다.</h3>
                      <h3>세계에서 인정 받는 맛과 건강함을 모두에게 널리 알리고 싶었습니다.</h3>
                      <h3>건강이 가족을 지키고 사회를 바꾸며 나라를 성장 시킨다는 신념으로 중남미뿐만 아니라 세계를 잇는 솔직한 기업이 되겠습니다.</h3>
                      <div className="breakline"></div>
                      <h4>About Us</h4>
                    </div>
                  </div>
                </div>
                <div className="sub-section01 col-sm-12 col-md-5">
                  <div className="sub-section-wrapper">
                    <div className="images-wrapper">
                      <div className="circle">HPP</div>
                      <div className="circle">EVOH</div>
                      <div className="circle">40 DAYS</div>
                      <img className="image06 img-fluid" src="images/avocado13.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </Element>

            <div className="section-title">
              <div className="title">
                <h1>해동 및 보관방법</h1>
              </div>
            </div>
            <div className="section05 row" id="section05">
              <div className="sub-section01 col-xs-12 col-sm-6 col-md-6">
                <div className="sub-section-wrapper">
                  <div className="circle">
                    <div className="title">
                      <i className="fas fa-thermometer-half fa-10x"/>
                      <h2>해동</h2>
                      <h3>플라티 아보카도 퓨레는 냉동 제품입니다.</h3>
                      <h3>하루 전 냉장고에 넣어두고 해동시켜주세요.</h3>
                      <h3>뜨거운 물이나 상온에서 해동하면 맛이 변질될 수 있습니다.</h3>
                      <h3>기호의 맞게 음식과 조합하여 최상의 퓨레를 맛보세요.</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-section02 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className="sub-section-wrapper">
                  <div className="circle">
                    <div className="title">
                      <img className="img-fluid" src="images/fridge.png" alt=""/>
                      <h2>보관방법</h2>
                      <h3>팩의 한쪽 끝을 가위로 조금 잘라 드세요.</h3>
                      <h3>빈 부분을 돌돌 말아 집게로 고정해 냉장 보관해 주세요.</h3>
                      <h3>공기와의 접촉이 적어야 갈변을 최대한 막을 수 있습니다.</h3>
                      <h3>해동 후 재냉동은 불가합니다.</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-title row" id="section06">
              <div className="title col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h1>배송 관련 안내</h1>
                <h3><i className="fas fa-truck fa-7x"/></h3>
                <h3>저희 제품은 신선 식품으로 분류되어 익일 도착을 원칙으로 하고 있습니다.</h3>
                <h3>발송은 월~목요일에만 가능하며 정오 주문 건까지 당일 발송됩니다.</h3>
                <h3>목요일 정오 이후 주문 건은 그 다음주 월요일에 발송됩니다.</h3>
                <h3>상품 특성상 단순변심에 의한 반품이 불가합니다.</h3>
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
