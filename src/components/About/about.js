import React, { Component } from "react";
import ceo from "../../images/ceo.jpg";
import { AiFillLinkedin } from "react-icons/ai";
import "./style.css";
class About extends Component {
  state = {};
  render() {
    return (
      <>
        {/* <div className="main-about">
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-4">
                <div className="edit-about-img text-center">
                  <img src={ceo} alt="CEO" />
                  <div className="edit-img-info">
                    <h2> ماجد عارف </h2>
                    <span>المدير التنفيذي وشريك مؤسس</span>
                    <div className="edit-img-icon">
                      <a href="https://www.linkedin.com/in/magidarif/">
                        <AiFillLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="edit-about-title">
                  <p>
                    عندما اتذكر بدايه فاريانس وكيف ارتقينا واين نقف الان اشعر
                    بالفخر بكل ماحققناه من نجاحات ومانسعي لتحققيه في الفتره
                    القادمه الان اصبح كل الموظفين وانا منهم نفخر حين نصرح اننا
                    ننتمني لشركه فاريانس العالميه وخلال عملي بفاريانس تعلمت ان
                    المؤسسات الكبيره تقوم علي اشخاص عظيمه لذا يشرفني ان اعمل مع
                    فريق رائع
                  </p>
                  <p>
                    وبدونه لما وصلنا اللي مانحن عليه الان لن احدثكم علي كفاءه
                    وقدره الفريق الذي اقوده لكني واثق ان لدي فريق من افضل فريق
                    العمل علي مستوي الشرق الاوسط من حيث المهنيه و التعليم و
                    الرؤيه السليمة واخيرا سر نجاحنا هو"العمل من خلال المعرفه
                    العلميه السليمة "بعد توفيق الله لنا فهذا ما نحصرص عليه في
                    فاريانس لان امتلاك المعرفه المتكامه لنطاق عملنا بساعد علي
                    السير بخطوات ثابته لتحقيق اهدافنا
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}

export default About;
