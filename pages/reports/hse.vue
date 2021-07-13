<template>
  <div>

    <v-container class="container">
 
<v-row>

  <v-col
    cols="2"
  >
  </v-col>

   <v-col
    cols="8"
  >
    <v-img class="watermark" src="watermark.png"></v-img>
 
     </v-col>  

    <v-col
    cols="2"
  >
  </v-col>  
   
 </v-row>


<v-row
    >

  
      <v-col
        cols="6" 
      >
      <v-img class="logo" src="/logo.png"></v-img>
    
      </v-col>


      <v-col
        cols="6"
      >

      <v-row>
  
      <v-col  
        cols="4"
      >
       <v-img class="logo_iso" src="https://wewatch.ae/wp-content/uploads/2021/02/BV_Cert_-ISO_31000.jpg"></v-img>
      </v-col> 

       <v-col  
        cols="4"
      >
      <v-img class="logo_iso2" src="https://wewatch.ae/wp-content/uploads/2021/02/Logo-ISO-18788-440.jpg"></v-img>
       </v-col>

      <v-col
        cols="4"
        class="float-right"
      >
      <v-img class="logo_iso3" src="https://wewatch.ae/wp-content/uploads/2021/02/Logo-ISO-9001-14001-ISO-45001-440.jpg"></v-img>
       
      </v-col>

  </v-row>

      </v-col>

</v-row>


<!-- section 2 -->

    
    <v-row>

       <v-col
        cols="12"
        style="min-width: 100px;"
        class="flex-grow-0 flex-shrink-1"
        >
      <h2 class="top_h">Daily HSE Report</h2><br>
      <p class="top_h_left" style="color:red">EVENT/PROJECT NAME  </p>
      <p class="top_h_left">KINGDOM OF SAUDI ARABIA</p>
      <p class="top_h_left">02 FEBRUARY 2021 </p>

      <ul class="top_listing">
        <li>John Harris</li>
        <li>Director QHSSE</li>
        <li>UAE: +971 52 216 3038</li>
        <li>KSA: +966 50 604 2270</li>
      </ul>  

       </v-col>

    </v-row>  

       <v-row>

      <v-col
        cols="12"
        style="min-width: 100px;"
        class="flex-grow-0 flex-shrink-1"
        >

      <p class="">Dissemination and Confidentially </p>
      <p class="">This Daily Safety and Security Report should be treated as a commercially sensitive document. Blink Experience should limit and control distribution of this sensitive document and ensure that the original and approved copies are stored in a secure location, in accordance with ISO quality management systems standards and company standard operating procedures (SOPs). </p>
      <p class="" style="color:red;">Confidential </p>


       </v-col>

      </v-row>  


        <v-row>

       <v-col
        cols="12"
        style="min-width: 100px;"
        class="flex-grow-0 flex-shrink-1"
        >

      <h2 class="">1.	Daily Situation Summary <span style="color:red"> (Combined QHSSE)  </span> </h2>
      <p class=""> 1.1	Head of Security arrived in Al Qaisumah in the last 24hrs, however Operations Manager requested he return to Riyadh at short notice to support a potential Ministry of Health visit, all passed with no concerns. After speaking with the client relations senior manager, security guards were observed conducting their role of access control. Follow up meeting with Flow Solutions Project Manager (Mahmoud El Sheikh), he was successful in receiving some electrical components for the generators located at KASC. He is also expecting the full delivery of the missing fire extinguishers and spill kits tomorrow, he was also reminded to change the few fire extinguishers that were showing out of date inspections. He is still on track for a more detailed inspection on the 28 Dec 2020 by the Head of Security.  The Project Manager (Mahmoud El Sheikh) remains extremely proactive and eager to fulfil his supplier deliverables.</p>
      <p class="">1.2	Head of Security to conduct another safety inspection on the 28 Dec 2020 with Flow Solutions prior to operational phase. Flow Solutions are only responsible for the Start/Finish location and not any of the bivouac sites.  </p>


       </v-col>

        </v-row>  

         <v-row>

       <v-col
        cols="12"
        style="min-width: 100px;"
        class="flex-grow-0 flex-shrink-1"
        >

      <h2 class="">2.	Event / Project Details  <span style="color:red">  </span> </h2>
       </v-col>
        </v-row>  


  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Weather
          </th>
          <th class="text-left">
            Wind Strength
          </th>
           <th class="text-left">
            Remarks 
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sunny 25 Degrees</td>
          <td>12 kph</td>
           <td>Rain forecast for the next working day.</td>
          <!-- <td>{{ item.calories }}</td> -->
        </tr>
      </tbody>
    </template>
  </v-simple-table>
<br>  
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Design and Build Timings
          </th>
          <th class="text-left">
            Daily Operations man-hour
          </th>
           <th class="text-left">
            Remarks 
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>08:00 - 08:00hrs </td>
          <td>12/24hrs </td>
           <td>Two x shifts, day and night operations.</td>
          <!-- <td>{{ item.calories }}</td> -->
        </tr>
      </tbody>
    </template>
  </v-simple-table>

  <br>

  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Contractor Name 
          </th>
          <th class="text-left">
            Staff Numbers
          </th>
           <th class="text-left">
            Shift Pattern
          </th>
          <th class="text-left">
            Daily man-hours
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Mara LLC</td>
          <td>20 </td>
           <td>12 </td>
           <td>240</td>
        </tr>
         <tr>
          <td>Al Laith Scaffolding</td>
          <td>80 </td>
           <td>24</td>
           <td>1920</td>
        </tr>
         <tr>
          <td>VIP Security</td>
          <td>6 </td>
           <td>24</td>
           <td>144</td>
        </tr>
         <tr>
          <td>DB Security LLC</td>
          <td>109 </td>
           <td>24</td>
           <td>2616</td>
        </tr>
      </tbody>

    </template>
  </v-simple-table>

<br>

  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Type of Contractor / Sub-Contractor
          </th>
          <th class="text-left">
            Staff Numbers
          </th>
           <th class="text-left">
            Shift Pattern
          </th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>Office Management  </td>
          <td>18 </td>
           <td>Day Shift Only</td>
        </tr>
          <tr>
          <td>Security </td>
          <td>72 </td>
           <td>Day Shift</td>
        </tr>
          <tr>
          <td>Security </td>
          <td>43 </td>
           <td>Night Shift </td>
        </tr>
          <tr>
          <td>Construction and Production Workers  </td>
          <td>100 </td>
           <td>Day Shift</td>
        </tr>
           <tr>
          <td>Construction and Production Workers</td>
          <td>80 </td>
           <td>Night Shift </td>
        </tr>
          <tr>
          <td></td>
          <td>TOTAL man-days</td>
           <td>313 </td>
        </tr>
          <tr>
          <td></td>
          <td>Total man-hours</td>
           <td>5000</td>
        </tr>
          <tr>
          <td></td>
          <td>Total lost work hours</td>
           <td>-20</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>


    <v-row>

       <v-col
        cols="12"
        style="min-width: 100px;"
        class="flex-grow-0 flex-shrink-1"
        >
<br>
      <h2 class="">3.	Event / Project Key Meetings and Action Points <span style="color:red">  </span> </h2>
      <p class="">3.1	Nothing to report.</p>
      
      <p class="" style="color:red;">Confidential </p>

       <p class="">Prepared by WeWatch FZ LLC</p>

       </v-col>

        </v-row>

<br>


<v-row>

       <v-col
        cols="12"
        style="min-width: 100px;"
        class="flex-grow-0 flex-shrink-1"
        >

      <h2 class="">4.	Design/Build Activities in Progress   <span style="color:red"> (List the activities) (HSE) </span> </h2>
       </v-col>
        </v-row>  


  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Occurrence
          </th>
          <th class="text-left">
            Yes or No
          </th>
           <th class="text-left">
            Remarks 
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Scaffolding Construction</td>
          <td></td>
           <td></td>
        </tr>
          <tr>
          <td>Electrical Works</td>
          <td></td>
           <td></td>
        </tr>
          <tr>
          <td>Heavy Crane Lifting Operations</td>
          <td></td>
           <td></td>
        </tr>
          <tr>
          <td>Working from Height </td>
          <td></td>
           <td></td>
        </tr>
          <tr>
          <td>Painting / Spraying / Preparation</td>
          <td></td>
           <td></td>
        </tr>
          <tr>
          <td>Groundworks - Compacting / Grading</td>
          <td></td>
           <td></td>
        </tr>
          <tr>
          <td>Work Permit Compliance (Hot Works/Confined Spaces</td>
          <td></td>
           <td></td>
        </tr>
          <tr>
          <td>Waste Management</td>
          <td></td>
           <td></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

<br>

   <v-row>

       <v-col
        cols="12"
        style="min-width: 100px;"
        class="flex-grow-0 flex-shrink-1"
        >

      <h2 class="">5.	Toolbox Talk / HSE / Security Inductions  <span style="color:red">  </span> </h2>
      <p class=""> 5.1	Nothing to Report</p>
       <p class="" style="color:red"> 5.2	If Toolbox talk or on-site induction training was conducted, please use correct forms and acquire signatures for all attendees and name of person delivering talk or training.</p>
    
       </v-col>

      </v-row>  

      <v-row>
        <v-col>
      <h2 class="">6.	Event/Project Health, Safety and Environmental Compliance   <span style="color:red"> (HSE) </span> </h2>
       </v-col>
        </v-row>  


    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Occurrence
          </th>
          <th class="text-left">
            Yes or No
          </th>
           <th class="text-left">
            Remarks 
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Any safety non-compliance violations</td>
          <td></td>
           <td></td>
        </tr>
          <tr>
          <td>Any Incidents Requiring First Aid</td>
          <td></td>
           <td></td>
        </tr>
          <tr>
          <td>Any Environmental Incidents (Spills)</td>
          <td></td>
           <td></td>
        </tr>
          <tr>
          <td>Project Daily Housekeeping Completed</td>
          <td></td>
           <td></td>
        </tr>
          <tr>
          <td>Work Permit Compliance (Hot Works/Confined Spaces)</td>
          <td></td>
           <td></td>
        </tr>
          <tr>
          <td>Fuels/Lubricants/Compressed Cylinders Stored Correctly</td>
          <td></td>
           <td></td>
        </tr>
          <tr>
          <td>Any additional Health, Safety, Environment Concerns</td>
          <td></td>
           <td></td>
        </tr>
       
      </tbody>
    </template>
  </v-simple-table>

<br>

 <v-row>
        <v-col>
      <h2 class="">7.	New Hazard Identified  <span style="color:red"> (HSE) </span> </h2>
       </v-col>
        </v-row>  


    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Add to Event / Project Risk Assessment
          </th>
          <th class="text-left">
            Yes or No
          </th>
           <th class="text-left">
            Corrective Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Trailing wires from handheld electrical tools</td>
          <td>YES</td>
           <td>Additional sockets fitted to reduce trailing wires and extension leads.</td>
        </tr>
          <tr>
          <td>Grinding metal works with safety guards fitted.</td>
          <td>YES</td>
           <td>Work stopped until guards are fitted to hand tools.</td>
        </tr>
          
      </tbody>
    </template>
  </v-simple-table>

  <br>

 <v-row>
        <v-col>
      <h2 class="">8.	Incident / Accident or Near Miss Reporting  <span style="color:red">  </span> </h2>
       </v-col>
        </v-row>  


    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Occurrence
          </th>
          <th class="text-left">
            Yes or No
          </th>
           <th class="text-left">
            Remarks
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Near Miss Incidents</td>
          <td>YES</td>
           <td>Near Miss Report Submitted to QHSSE Director and Project Manager.</td>
        </tr>
         <tr>
          <td>Accidents / Incidents</td>
          <td>NO</td>
           <td></td>
        </tr>
      </tbody>

      <br>

      <p class="" style="color:red;">Confidential </p>

       <p class="">Prepared by WeWatch FZ LLC</p>

    </template>
  </v-simple-table>


  <br>

 <v-row>
        <v-col>
      <h2 class="">9.	COVID-19 Mitigation Compliance  <span style="color:red"> (HSE) </span> </h2>
       </v-col>
        </v-row>  


    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Occurrence
          </th>
          <th class="text-left">
            Yes or No
          </th>
           <th class="text-left">
            Remarks
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Face Mask Compliance</td>
          <td>YES</td>
           <td></td>
        </tr>
         <tr>
          <td>Social Distancing Compliance</td>
          <td>YES</td>
           <td></td>
        </tr>
          <tr>
          <td>Hand Sanitation Compliance</td>
          <td>NO</td>
           <td>Washrooms require hand sanitiser stations to placed outside.</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>


         <br>

     <v-row>

       <v-col
        cols="12"
        style="min-width: 100px;"
        class="flex-grow-0 flex-shrink-1"
        >

      <h2 class="">10.	Procurement Request 	<span style="color:red"> (Operational HSE or Security Equipment Requirement)  </span> </h2>
      <p class="">10.1	Nothing to report.</p>
      
       </v-col>

      </v-row>   

           <br>

     <v-row>

       <v-col
        cols="12"
        style="min-width: 100px;"
        class="flex-grow-0 flex-shrink-1"
        >

      <h2 class="">11.	Red Flag 	<span style="color:red">  </span> </h2>
      <p class="">11.1	Nothing to report. </p>
      
       </v-col>

      </v-row> 

    <p class="" style="color:red;">Confidential </p>

    <p class="">Prepared by WeWatch FZ LLC</p>

    </v-container>

  </div>
</template>



<script>
export default {
  layout:'empty'
}
</script>

<style scoped>


.watermark
{
  position:absolute;
  width: 60%;
  margin-top: 200px;
}


.logo
{
  width: 350px;
  /* margin-top:7px; */
}


.top_h
{
  font-size: 35px;
  text-align: center;
}
.top_h_left
{
  font-size:20px;
  font-weight: 500;
}

ul.top_listing li
{
  display: block;
  font-size: 22px;
  
} 

ul.top_listing
{
padding-left: 0px!important;
}

th.text-left {
    color: #fff!important;
    background-color:#315aa5;
    border: 1px solid #717171;
}
td
{
      background: #f1f1f1;
      border: 1px solid #717171;
}

th.text-left {
    font-size: 14px!important;
}


  
</style>

