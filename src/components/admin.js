import React, { Component } from 'react';
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
<div className="container body">
  <div className="main_container">
    <div className="col-md-3 left_col">
      <div className="left_col scroll-view">
        <div className="navbar nav_title" style={{border: 0}}>
          <a href="index.html" className="site_title"><i className="fa fa-paw" /></a>
        </div>
        <div className="clearfix" />
        {/* menu profile quick info */}
        <div className="profile">
          <div className="profile_pic">
            <img src="images/img.jpg" alt="..." className="img-circle profile_img" />
          </div>
          <div className="profile_info">
            <span>Welcome,</span>
            <h2>John Doe</h2>
          </div>
        </div>
        {/* /menu profile quick info */}
        <br />
        {/* sidebar menu */}
        <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
          <div className="menu_section active">
            <h3>General</h3>
            <ul className="nav side-menu" style={{}}>
              <li><a><i className="fa fa-home" /> Home <span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu">
                  <li><a href="index.html">Dashboard</a></li>
                  <li><a href="index2.html">Dashboard2</a></li>
                  <li><a href="index3.html">Dashboard3</a></li>
                </ul>
              </li>
              <li><a><i className="fa fa-edit" /> Forms <span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu">
                  <li><a href="form.html">General Form</a></li>
                  <li><a href="form_advanced.html">Advanced Components</a></li>
                  <li><a href="form_validation.html">Form Validation</a></li>
                  <li><a href="form_wizards.html">Form Wizard</a></li>
                  <li><a href="form_upload.html">Form Upload</a></li>
                  <li><a href="form_buttons.html">Form Buttons</a></li>
                </ul>
              </li>
              <li><a><i className="fa fa-desktop" /> UI Elements <span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu">
                  <li><a href="general_elements.html">General Elements</a></li>
                  <li><a href="media_gallery.html">Media Gallery</a></li>
                  <li><a href="typography.html">Typography</a></li>
                  <li><a href="icons.html">Icons</a></li>
                  <li><a href="glyphicons.html">Glyphicons</a></li>
                  <li><a href="widgets.html">Widgets</a></li>
                  <li><a href="invoice.html">Invoice</a></li>
                  <li><a href="inbox.html">Inbox</a></li>
                  <li><a href="calendar.html">Calendar</a></li>
                </ul>
              </li>
              <li className="active"><a><i className="fa fa-table" /> Tables <span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu" style={{display: 'block'}}>
                  <li className="current-page"><a href="tables.html">Tables</a></li>
                  <li><a href="tables_dynamic.html">Table Dynamic</a></li>
                </ul>
              </li>
              <li><a><i className="fa fa-bar-chart-o" /> Data Presentation <span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu">
                  <li><a href="chartjs.html">Chart JS</a></li>
                  <li><a href="chartjs2.html">Chart JS2</a></li>
                  <li><a href="morisjs.html">Moris JS</a></li>
                  <li><a href="echarts.html">ECharts</a></li>
                  <li><a href="other_charts.html">Other Charts</a></li>
                </ul>
              </li>
              <li><a><i className="fa fa-clone" />Layouts <span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu">
                  <li><a href="fixed_sidebar.html">Fixed Sidebar</a></li>
                  <li><a href="fixed_footer.html">Fixed Footer</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="menu_section">
            <h3>Live On</h3>
            <ul className="nav side-menu">
              <li><a><i className="fa fa-bug" /> Additional Pages <span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu">
                  <li><a href="e_commerce.html">E-commerce</a></li>
                  <li><a href="projects.html">Projects</a></li>
                  <li><a href="project_detail.html">Project Detail</a></li>
                  <li><a href="contacts.html">Contacts</a></li>
                  <li><a href="profile.html">Profile</a></li>
                </ul>
              </li>
              <li><a><i className="fa fa-windows" /> Extras <span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu">
                  <li><a href="page_403.html">403 Error</a></li>
                  <li><a href="page_404.html">404 Error</a></li>
                  <li><a href="page_500.html">500 Error</a></li>
                  <li><a href="plain_page.html">Plain Page</a></li>
                  <li><a href="login.html">Login Page</a></li>
                  <li><a href="pricing_tables.html">Pricing Tables</a></li>
                </ul>
              </li>
              <li><a><i className="fa fa-sitemap" /> Multilevel Menu <span className="fa fa-chevron-down" /></a>
                <ul className="nav child_menu">
                  <li><a href="#level1_1">Level One</a>
                  </li><li><a>Level One<span className="fa fa-chevron-down" /></a>
                    <ul className="nav child_menu">
                      <li className="sub_menu"><a href="level2.html">Level Two</a>
                      </li>
                      <li><a href="#level2_1">Level Two</a>
                      </li>
                      <li><a href="#level2_2">Level Two</a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#level1_2">Level One</a>
                  </li>
                </ul>
              </li>                  
              <li><a href="javascript:void(0)"><i className="fa fa-laptop" /> Landing Page <span className="label label-success pull-right">Coming Soon</span></a></li>
            </ul>
          </div>
        </div>
        {/* /sidebar menu */}
        {/* /menu footer buttons */}
        <div className="sidebar-footer hidden-small">
          <a data-toggle="tooltip" data-placement="top" title data-original-title="Settings">
            <span className="glyphicon glyphicon-cog" aria-hidden="true" />
          </a>
          <a data-toggle="tooltip" data-placement="top" title data-original-title="FullScreen">
            <span className="glyphicon glyphicon-fullscreen" aria-hidden="true" />
          </a>
          <a data-toggle="tooltip" data-placement="top" title data-original-title="Lock">
            <span className="glyphicon glyphicon-eye-close" aria-hidden="true" />
          </a>
          <a data-toggle="tooltip" data-placement="top" title data-original-title="Logout">
            <span className="glyphicon glyphicon-off" aria-hidden="true" />
          </a>
        </div>
        {/* /menu footer buttons */}
      </div>
    </div>
    {/* top navigation */}
    <div className="top_nav">
      <div className="nav_menu">
        <nav className role="navigation">
          <div className="nav toggle">
            <a id="menu_toggle"><i className="fa fa-bars" /></a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className>
              <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <img src="images/img.jpg" alt />John Doe
                <span className=" fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu dropdown-usermenu pull-right">
                <li><a href="javascript:;"> Profile</a></li>
                <li>
                  <a href="javascript:;">
                    <span className="badge bg-red pull-right">50%</span>
                    <span>Settings</span>
                  </a>
                </li>
                <li><a href="javascript:;">Help</a></li>
                <li><a href="login.html"><i className="fa fa-sign-out pull-right" /> Log Out</a></li>
              </ul>
            </li>
            <li role="presentation" className="dropdown">
              <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-envelope-o" />
                <span className="badge bg-green">6</span>
              </a>
              <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
                <li>
                  <a>
                    <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                    <span>
                      <span>John Smith</span>
                      <span className="time">3 mins ago</span>
                    </span>
                    <span className="message">
                      Film festivals used to be do-or-die moments for movie makers. They were where...
                    </span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                    <span>
                      <span>John Smith</span>
                      <span className="time">3 mins ago</span>
                    </span>
                    <span className="message">
                      Film festivals used to be do-or-die moments for movie makers. They were where...
                    </span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                    <span>
                      <span>John Smith</span>
                      <span className="time">3 mins ago</span>
                    </span>
                    <span className="message">
                      Film festivals used to be do-or-die moments for movie makers. They were where...
                    </span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                    <span>
                      <span>John Smith</span>
                      <span className="time">3 mins ago</span>
                    </span>
                    <span className="message">
                      Film festivals used to be do-or-die moments for movie makers. They were where...
                    </span>
                  </a>
                </li>
                <li>
                  <div className="text-center">
                    <a>
                      <strong>See All Alerts</strong>
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    {/* /top navigation */}
    {/* page content */}
    <div className="right_col" role="main" style={{minHeight: 1162}}>
      <div className>
        <div className="page-title">
          <div className="title_left">
            <h3>Tables <small>Some examples to get you started</small></h3>
          </div>
          <div className="title_right">
            <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">Go!</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="x_panel">
              <div className="x_title">
                <h2>Basic Tables <small>basic table subtitle</small></h2>
                <ul className="nav navbar-right panel_toolbox">
                  <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench" /></a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Settings 1</a>
                      </li>
                      <li><a href="#">Settings 2</a>
                      </li>
                    </ul>
                  </li>
                  <li><a className="close-link"><i className="fa fa-close" /></a>
                  </li>
                </ul>
                <div className="clearfix" />
              </div>
              <div className="x_content">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="x_panel">
              <div className="x_title">
                <h2>Stripped table <small>Stripped table subtitle</small></h2>
                <ul className="nav navbar-right panel_toolbox">
                  <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench" /></a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Settings 1</a>
                      </li>
                      <li><a href="#">Settings 2</a>
                      </li>
                    </ul>
                  </li>
                  <li><a className="close-link"><i className="fa fa-close" /></a>
                  </li>
                </ul>
                <div className="clearfix" />
              </div>
              <div className="x_content">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="x_panel">
              <div className="x_title">
                <h2>Hover rows <small>Try hovering over the rows</small></h2>
                <ul className="nav navbar-right panel_toolbox">
                  <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench" /></a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Settings 1</a>
                      </li>
                      <li><a href="#">Settings 2</a>
                      </li>
                    </ul>
                  </li>
                  <li><a className="close-link"><i className="fa fa-close" /></a>
                  </li>
                </ul>
                <div className="clearfix" />
              </div>
              <div className="x_content">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="x_panel">
              <div className="x_title">
                <h2>Boardered table <small>Bordered table subtitle</small></h2>
                <ul className="nav navbar-right panel_toolbox">
                  <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench" /></a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Settings 1</a>
                      </li>
                      <li><a href="#">Settings 2</a>
                      </li>
                    </ul>
                  </li>
                  <li><a className="close-link"><i className="fa fa-close" /></a>
                  </li>
                </ul>
                <div className="clearfix" />
              </div>
              <div className="x_content">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="x_panel">
              <div className="x_title">
                <h2>Table design <small>Custom design</small></h2>
                <ul className="nav navbar-right panel_toolbox">
                  <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench" /></a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Settings 1</a>
                      </li>
                      <li><a href="#">Settings 2</a>
                      </li>
                    </ul>
                  </li>
                  <li><a className="close-link"><i className="fa fa-close" /></a>
                  </li>
                </ul>
                <div className="clearfix" />
              </div>
              <div className="x_content">
                <p>Add class <code>bulk_action</code> to table for bulk actions options on row select</p>
                <div className="table-responsive">
                  <table className="table table-striped jambo_table bulk_action">
                    <thead>
                      <tr className="headings">
                        <th>
                          <div className="icheckbox_flat-green" style={{position: 'relative'}}><input type="checkbox" id="check-all" className="flat" style={{position: 'absolute', opacity: 0}} /><ins className="iCheck-helper" style={{position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, border: 0, opacity: 0, background: 'rgb(255, 255, 255)'}} /></div>
                        </th>
                        <th className="column-title" style={{display: 'table-cell'}}>Invoice </th>
                        <th className="column-title" style={{display: 'table-cell'}}>Invoice Date </th>
                        <th className="column-title" style={{display: 'table-cell'}}>Order </th>
                        <th className="column-title" style={{display: 'table-cell'}}>Bill to Name </th>
                        <th className="column-title" style={{display: 'table-cell'}}>Status </th>
                        <th className="column-title" style={{display: 'table-cell'}}>Amount </th>
                        <th className="column-title no-link last" style={{display: 'table-cell'}}><span className="nobr">Action</span>
                        </th>
                        <th className="bulk-actions" colSpan={7} style={{display: 'none'}}>
                          <a className="antoo" style={{color: '#fff', fontWeight: 500}}>Bulk Actions ( <span className="action-cnt">1 Records Selected</span> ) <i className="fa fa-chevron-down" /></a>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="even pointer">
                        <td className="a-center ">
                          <div className="icheckbox_flat-green" style={{position: 'relative'}}><input type="checkbox" className="flat" name="table_records" style={{position: 'absolute', opacity: 0}} /><ins className="iCheck-helper" style={{position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, border: 0, opacity: 0, background: 'rgb(255, 255, 255)'}} /></div>
                        </td>
                        <td className=" ">121000040</td>
                        <td className=" ">May 23, 2014 11:47:56 PM </td>
                        <td className=" ">121000210 <i className="success fa fa-long-arrow-up" /></td>
                        <td className=" ">John Blank L</td>
                        <td className=" ">Paid</td>
                        <td className="a-right a-right ">$7.45</td>
                        <td className=" last"><a href="#">View</a>
                        </td>
                      </tr>
                      <tr className="odd pointer">
                        <td className="a-center ">
                          <div className="icheckbox_flat-green" style={{position: 'relative'}}><input type="checkbox" className="flat" name="table_records" style={{position: 'absolute', opacity: 0}} /><ins className="iCheck-helper" style={{position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, border: 0, opacity: 0, background: 'rgb(255, 255, 255)'}} /></div>
                        </td>
                        <td className=" ">121000039</td>
                        <td className=" ">May 23, 2014 11:30:12 PM</td>
                        <td className=" ">121000208 <i className="success fa fa-long-arrow-up" />
                        </td>
                        <td className=" ">John Blank L</td>
                        <td className=" ">Paid</td>
                        <td className="a-right a-right ">$741.20</td>
                        <td className=" last"><a href="#">View</a>
                        </td>
                      </tr>
                      <tr className="even pointer">
                        <td className="a-center ">
                          <div className="icheckbox_flat-green" style={{position: 'relative'}}><input type="checkbox" className="flat" name="table_records" style={{position: 'absolute', opacity: 0}} /><ins className="iCheck-helper" style={{position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, border: 0, opacity: 0, background: 'rgb(255, 255, 255)'}} /></div>
                        </td>
                        <td className=" ">121000038</td>
                        <td className=" ">May 24, 2014 10:55:33 PM</td>
                        <td className=" ">121000203 <i className="success fa fa-long-arrow-up" />
                        </td>
                        <td className=" ">Mike Smith</td>
                        <td className=" ">Paid</td>
                        <td className="a-right a-right ">$432.26</td>
                        <td className=" last"><a href="#">View</a>
                        </td>
                      </tr>
                      <tr className="odd pointer">
                        <td className="a-center ">
                          <div className="icheckbox_flat-green" style={{position: 'relative'}}><input type="checkbox" className="flat" name="table_records" style={{position: 'absolute', opacity: 0}} /><ins className="iCheck-helper" style={{position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, border: 0, opacity: 0, background: 'rgb(255, 255, 255)'}} /></div>
                        </td>
                        <td className=" ">121000037</td>
                        <td className=" ">May 24, 2014 10:52:44 PM</td>
                        <td className=" ">121000204</td>
                        <td className=" ">Mike Smith</td>
                        <td className=" ">Paid</td>
                        <td className="a-right a-right ">$333.21</td>
                        <td className=" last"><a href="#">View</a>
                        </td>
                      </tr>
                      <tr className="even pointer">
                        <td className="a-center ">
                          <div className="icheckbox_flat-green" style={{position: 'relative'}}><input type="checkbox" className="flat" name="table_records" style={{position: 'absolute', opacity: 0}} /><ins className="iCheck-helper" style={{position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, border: 0, opacity: 0, background: 'rgb(255, 255, 255)'}} /></div>
                        </td>
                        <td className=" ">121000040</td>
                        <td className=" ">May 24, 2014 11:47:56 PM </td>
                        <td className=" ">121000210</td>
                        <td className=" ">John Blank L</td>
                        <td className=" ">Paid</td>
                        <td className="a-right a-right ">$7.45</td>
                        <td className=" last"><a href="#">View</a>
                        </td>
                      </tr>
                      <tr className="odd pointer">
                        <td className="a-center ">
                          <div className="icheckbox_flat-green" style={{position: 'relative'}}><input type="checkbox" className="flat" name="table_records" style={{position: 'absolute', opacity: 0}} /><ins className="iCheck-helper" style={{position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, border: 0, opacity: 0, background: 'rgb(255, 255, 255)'}} /></div>
                        </td>
                        <td className=" ">121000039</td>
                        <td className=" ">May 26, 2014 11:30:12 PM</td>
                        <td className=" ">121000208 <i className="error fa fa-long-arrow-down" />
                        </td>
                        <td className=" ">John Blank L</td>
                        <td className=" ">Paid</td>
                        <td className="a-right a-right ">$741.20</td>
                        <td className=" last"><a href="#">View</a>
                        </td>
                      </tr>
                      <tr className="even pointer">
                        <td className="a-center ">
                          <div className="icheckbox_flat-green" style={{position: 'relative'}}><input type="checkbox" className="flat" name="table_records" style={{position: 'absolute', opacity: 0}} /><ins className="iCheck-helper" style={{position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, border: 0, opacity: 0, background: 'rgb(255, 255, 255)'}} /></div>
                        </td>
                        <td className=" ">121000038</td>
                        <td className=" ">May 26, 2014 10:55:33 PM</td>
                        <td className=" ">121000203</td>
                        <td className=" ">Mike Smith</td>
                        <td className=" ">Paid</td>
                        <td className="a-right a-right ">$432.26</td>
                        <td className=" last"><a href="#">View</a>
                        </td>
                      </tr>
                      <tr className="odd pointer">
                        <td className="a-center ">
                          <div className="icheckbox_flat-green" style={{position: 'relative'}}><input type="checkbox" className="flat" name="table_records" style={{position: 'absolute', opacity: 0}} /><ins className="iCheck-helper" style={{position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, border: 0, opacity: 0, background: 'rgb(255, 255, 255)'}} /></div>
                        </td>
                        <td className=" ">121000037</td>
                        <td className=" ">May 26, 2014 10:52:44 PM</td>
                        <td className=" ">121000204</td>
                        <td className=" ">Mike Smith</td>
                        <td className=" ">Paid</td>
                        <td className="a-right a-right ">$333.21</td>
                        <td className=" last"><a href="#">View</a>
                        </td>
                      </tr>
                      <tr className="even pointer">
                        <td className="a-center ">
                          <div className="icheckbox_flat-green" style={{position: 'relative'}}><input type="checkbox" className="flat" name="table_records" style={{position: 'absolute', opacity: 0}} /><ins className="iCheck-helper" style={{position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, border: 0, opacity: 0, background: 'rgb(255, 255, 255)'}} /></div>
                        </td>
                        <td className=" ">121000040</td>
                        <td className=" ">May 27, 2014 11:47:56 PM </td>
                        <td className=" ">121000210</td>
                        <td className=" ">John Blank L</td>
                        <td className=" ">Paid</td>
                        <td className="a-right a-right ">$7.45</td>
                        <td className=" last"><a href="#">View</a>
                        </td>
                      </tr>
                      <tr className="odd pointer">
                        <td className="a-center ">
                          <div className="icheckbox_flat-green" style={{position: 'relative'}}><input type="checkbox" className="flat" name="table_records" style={{position: 'absolute', opacity: 0}} /><ins className="iCheck-helper" style={{position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: 0, padding: 0, border: 0, opacity: 0, background: 'rgb(255, 255, 255)'}} /></div>
                        </td>
                        <td className=" ">121000039</td>
                        <td className=" ">May 28, 2014 11:30:12 PM</td>
                        <td className=" ">121000208</td>
                        <td className=" ">John Blank L</td>
                        <td className=" ">Paid</td>
                        <td className="a-right a-right ">$741.20</td>
                        <td className=" last"><a href="#">View</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /page content */}
    {/* footer content */}
    <footer>
      <div className="pull-right">
        Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
      </div>
      <div className="clearfix" />
    </footer>
    {/* /footer content */}
  </div>
</div>
{/* jQuery */}
{/* Bootstrap */}
{/* FastClick */}
{/* NProgress */}
{/* iCheck */}
{/* Custom Theme Scripts */}


        </div> );
    }
}
 
export default Admin;