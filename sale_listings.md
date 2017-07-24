---
layout: default
title: PROPERTIES FOR SALE
---

<div class="page_content_wrap">
   <div class="content_wrap">
      <div class="content">
         <div class="sc_property sc_property_style_property-1">
            <div id = "listings_column" class="columns_wrap">
            {% for post in site.categories.sale %}
               <div class="column-1_3 column_padding_bottom">
                  <div class="sc_property_item">
                     <div class="sc_property_image">
                        <a href="{{ site.baseurl }}{{ post.url }}">
                           <div class="property_price_box">
                              <span class="property_price_box_sign">PKR</span><span class="property_price_box_price">{{ post.price }}</span>
                           </div>
                           <img alt="" src="{{ site.baseurl }}/images/image-7-1-770x460.jpg">
                        </a>
                     </div>
                     <div class="sc_property_info">
                        <div class="sc_property_description">{{ post.type }}</div>
                        <div>
                           <div class="sc_property_icon">
                              <span class="icon-location"></span>
                           </div>
                           <div class="sc_property_title">
                              <div class="sc_property_title_address_1">
                                 <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> 
                              </div>
                              <div class="sc_property_title_address_2">{{ post.address }}</div>
                           </div>
                           <div class="cL"></div>
                        </div>
                     </div>
                     <div class="sc_property_info_list">
                        <span class="icon-building113">{{ post.area }}</span>
                        <span class="icon-bed">{{ post.beds }}</span>
                        <span class="icon-bath">{{ post.baths }}</span>
                        <span class="icon-warehouse">{{ post.workshops }}</span>
                     </div>
                  </div>
               </div>
               {% endfor %}
            </div>
         </div>
         <nav id="pagination" class="pagination_wrap pagination_pages">
            <span class="pager_current active">1</span>
            <!--
            <a href="#" class="">2</a>
            -->
            <a href="#" class="pager_next"></a>
            <a href="#" class="pager_last"></a>
         </nav>
      </div>
   </div>
</div>