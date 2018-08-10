import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'components';
import * as Scroll from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll'
let ScrollLink = Scroll.Link;

class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {
      return (
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12">
                <div className="title center">
                  <h5>(주)플라티</h5>
                  <h5>대표자 : 이종빈 설주원  사업자등록번호 : 663-88-00755</h5>
                  <h5>통신판매업신고번호 : 2018-서울강남-02142  개인정보관리자 : 이한근</h5>
                  <h5>(우 : 06178) 서울특별시 강남구 테헤란로82길 15 디아이타워 6층 16호</h5>
                  <h5>대표전화 : 0507-1329-3344  메일 : platikorea@naver.com</h5>
                  <h5>Copyright(c) 2018 플라티. All rights reserved</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default Footer;
