import { Component } from 'react';

import FormInput from '../ui-components/FormInput';
import FormDateInput from '../ui-components/FormDateInput';
import ContentDataService from '../../services/content.services';

class ContentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        serviceDate: '',
        youtubeKey: '',
        openingHymnForFirstService: '',
        openingHymnForMainService: {
          hymn: '',
          hymnBy: ''        
        },
        prayer: '',
        anthemForFirstService: {
          hymn: '',
          hymnBy: ''        
        },
        anthemForMainService: {
          hymn: '',
          hymnBy: ''        
        },
        message: {
          title: '',
          script: '',
          messageBy: ''
        },
        offertoryBy: '',
        announcementBy: '',
        doxology: '',
        benedictionBy: '',
      }
    }
  }

  componentDidMount(){
    if (this.props.contentId) {
      this.getContent(this.props.contentId);
    }
  };

  getContent = async (id) => {
    const res = await ContentDataService.getContent(id);
    const initValue = res.data();

    this.setState({
      content: {
        serviceDate: initValue.serviceDate,
        youtubeKey: initValue.youtubeKey,
        openingHymnForFirstService: initValue.openingHymnForFirstService,
        openingHymnForMainService: {
          hymn: initValue.openingHymnForMainService.hymn,
          hymnBy: initValue.openingHymnForMainService.hymnBy        
        },
        prayer: initValue.prayer,
        anthemForFirstService: {
          hymn: initValue.anthemForFirstService.hymn,
          hymnBy: initValue.anthemForFirstService.hymnBy      
        },
        anthemForMainService: {
          hymn: initValue.anthemForMainService.hymn,
          hymnBy: initValue.anthemForMainService.hymnBy        
        },
        message: {
          title: initValue.message.title,
          script: initValue.message.script,
          messageBy: initValue.message.messageBy
        },
        offertoryBy: initValue.offertoryBy,
        announcementBy: initValue.announcementBy,
        doxology: initValue.doxology,
        benedictionBy: initValue.benedictionBy,
      }
    });
  };


  handleInput = input => e => {
    if (input === "openingHymnForMainService") {
      this.setState({
        content : {
          ...this.state.content,
          openingHymnForMainService: {
            ...this.state.content.openingHymnForMainService,
            [e.target.name]: e.target.value
          }
        }
      })
    } else if (input === "anthemForFirstService") {
      this.setState({
        content : {
          ...this.state.content,
          anthemForFirstService: {
            ...this.state.content.anthemForFirstService,
            [e.target.name]: e.target.value
          }
        }
      })
    } else if (input === "anthemForMainService") {
      this.setState({
        content : {
          ...this.state.content,
          anthemForMainService: {
            ...this.state.content.anthemForMainService,
            [e.target.name]: e.target.value
          }
        }
      })
    } else if (input === "message") {
      this.setState({
        content : {
          ...this.state.content,
          message: {
            ...this.state.content.message,
            [e.target.name]: e.target.value
          }
        }
      })
    } else {
      this.setState({
        content : {
          ...this.state.content,
          [e.target.name]: e.target.value
        }
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.contentId) {
      this.props.addContent(this.props.contentId, this.state.content)
    } else {
      this.props.addContent(this.state.content)
    }
  }

  render() {
    return (
      <div className="container py-3 px-3 content">
        <form onSubmit={this.handleSubmit}>
          <div>
            <FormDateInput
              id="serviceDate"
              name="serviceDate"
              label="Service Date"
              placeholder="serviceDate"
              value={this.state.content.serviceDate}
              handleInput={this.handleInput("serviceDate")}
            />

            <FormInput
              id="youtubeKey"
              name="youtubeKey"
              label="Youtube Key"
              placeholder="youtubeKey"
              value={this.state.content.youtubeKey}
              handleInput={this.handleInput("youtubeKey")}
            />
          </div>
          <div className="row mt-3">
            <div className="">
              <table className="table table-bordered text-center">
                <tbody>
                  <tr>
                    <td>묵도/일어서서</td>
                    <td colSpan="2">예배로의 부르심</td>
                  </tr>
                  <tr>
                    <td colSpan="1">신앙고백</td>
                    <td>사도신경</td>
                    <td rowSpan="2">
                      <div>찬양의 시간</div>
                      <div>
                      <FormInput
                        id="hymn"
                        name="hymn"
                        placeholder="찬양(2부)"
                        value={this.state.content.openingHymnForMainService.hymn}
                        handleInput={this.handleInput("openingHymnForMainService")}
                      />
                      </div>
                      <div>
                        <FormInput
                          id="hymnBy"
                          name="hymnBy"
                          placeholder="찬양자(2부)"
                          value={this.state.content.openingHymnForMainService.hymnBy}
                          handleInput={this.handleInput("openingHymnForMainService")}
                        /> 
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>찬송</td>
                      <FormInput
                        id="openingHymnForFirstService"
                        name="openingHymnForFirstService"
                        placeholder="찬양(1부)"
                        value={this.state.content.openingHymnForFirstService}
                        handleInput={this.handleInput()}
                      />
                  </tr>
                  <tr>
                    <td>대표기도</td>
                    <td colSpan="2">
                    <FormInput
                      id="prayer"
                      name="prayer"
                      placeholder="대표기도"
                      value={this.state.content.prayer}
                      handleInput={this.handleInput()}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td>찬양</td>
                    <td>
                      <div>
                      <FormInput
                        id="hymn"
                        name="hymn"
                        placeholder="찬양"
                        value={this.state.content.anthemForFirstService.hymn}
                        handleInput={this.handleInput("anthemForFirstService")}
                      />
                      </div>
                      <div>
                      <FormInput
                        id="hymnBy"
                        name="hymnBy"
                        placeholder="찬양자"
                        value={this.state.content.anthemForFirstService.hymnBy}
                        handleInput={this.handleInput("anthemForFirstService")}
                      />                    
                      </div>
                    </td>
                    <td>
                      <div>
                      <FormInput
                        id="hymn"
                        name="hymn"
                        placeholder="찬양"
                        value={this.state.content.anthemForMainService.hymn}
                        handleInput={this.handleInput("anthemForMainService")}
                      />
                      </div>
                      <div>
                      <FormInput
                        id="hymnBy"
                        name="hymnBy"
                        placeholder="찬양자"
                        value={this.state.content.anthemForMainService.hymnBy}
                        handleInput={this.handleInput("anthemForMainService")}
                      />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>말씀</td>
                    <td colSpan="2">
                      <div>
                        <FormInput
                          id="title"
                          name="title"
                          placeholder="말씀제목"
                          value={this.state.content.message.title}
                          handleInput={this.handleInput("message")}
                        />
                      </div>
                      <div>
                        <FormInput
                          id="script"
                          name="script"
                          placeholder="말씀구절"
                          value={this.state.content.message.script}
                          handleInput={this.handleInput("message")}
                        />
                      </div>
                      <div>
                        <FormInput
                          id="messageBy"
                          name="messageBy"
                          placeholder="말씀 전달자"
                          value={this.state.content.message.messageBy}
                          handleInput={this.handleInput("message")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>헌금</td>
                    <td colSpan="2">
                      <FormInput
                        id="offertoryBy"
                        name="offertoryBy"
                        placeholder="헌금위원"
                        value={this.state.content.offertoryBy}
                        handleInput={this.handleInput()}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>광고</td>
                    <td colSpan="2">
                      <FormInput
                        id="announcementBy"
                        name="announcementBy"
                        placeholder="광고"
                        value={this.state.content.announcementBy}
                        handleInput={this.handleInput()}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>찬송/일어서서</td>
                    <td colSpan="2">
                    <FormInput
                      id="doxology"
                      name="doxology"
                      placeholder="찬송"
                      value={this.state.content.doxology}
                      handleInput={this.handleInput()}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td>축도/일어서서</td>
                    <td colSpan="2">
                      <FormInput
                        id="benedictionBy"
                        name="benedictionBy"
                        placeholder="축도"
                        value={this.state.content.benedictionBy}
                        handleInput={this.handleInput()}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  };
};

export default ContentForm;