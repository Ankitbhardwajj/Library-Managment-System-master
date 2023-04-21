import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <section class="service-grid pb-5 pt-5">
    <div class="container">
        <div class="row">
            <div class="col-xl-12 text-center mb-4">
                <div class="service-title">
                    <h2>Our Services</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div style={{backgroundColor:"whitesmoke"}}class="col-lg-4 col-md-6 text-center mb-3">
                <div class="service-wrap">
                    <div class="service-icon">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <h4>Library Catalog Management</h4>
                    <p>The LMS can provide features for managing the library's collection, including cataloging, classification, and indexing of library resources such as books, journals, e-books, e-journals, and multimedia items....</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div style={{backgroundColor:"whitesmoke"}}class="col-lg-4 col-md-6 text-center mb-3">
                <div class="service-wrap">
                    <div class="service-icon">
                        <i class="far fa-chart-bar"></i>
                    </div>
                    <h4>Online Public Access Catalog (OPAC)</h4>
                    <p>The LMS can provide an online catalog that allows library users to search, browse, and request library resources remotely. It can also offer features like personalized user accounts, book reviews, ratings, and recommendations....</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div style={{backgroundColor:"whitesmoke"}}class="col-lg-4 col-md-6 text-center mb-3">
                <div class="service-wrap">
                    <div class="service-icon">
                        <i class="fas fa-database"></i>
                    </div>
                    <h4>Self-Service Features</h4>
                    <p>The LMS can offer self-service features to library users, such as self-checkout stations, online renewals, online holds or reservations, and notifications about overdue items or upcoming due dates....</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div style={{backgroundColor:"whitesmoke"}} class="col-lg-4 col-md-6 text-center mb-3">
                <div class="service-wrap">
                    <div class="service-icon">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <h4>Administration and Configuration</h4>
                    <p>The LMS can provide administrative features for managing system configurations, user roles and permissions, security settings, and system integrations. It can also offer customization options to adapt the system to the specific needs of the library....</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div style={{backgroundColor:"whitesmoke"}}class="col-lg-4 col-md-6 text-center mb-3">
                <div class="service-wrap">
                    <div class="service-icon">
                        <i class="fas fa-chart-pie"></i>
                    </div>
                    <h4>Resource Acquisition and Budget Management</h4>
                    <p>The LMS can assist with resource acquisition tasks, such as creating purchase orders, tracking orders, receiving and processing new resources, managing budgets, and generating reports related to resource acquisition and budgeting....</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div style={{backgroundColor:"whitesmoke"}}class="col-lg-4 col-md-6 text-center mb-3">
                <div class="service-wrap">
                    <div class="service-icon">
                        <i class="fas fa-thumbs-up"></i>
                    </div>
                    <h4>Member Management</h4>
                    <p>The LMS can facilitate member management tasks, such as member registration, member profile management, membership renewal, and membership tracking. It can also support features like member search, member communication, and managing member fines or fees...</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Services