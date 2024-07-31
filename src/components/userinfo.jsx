import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Image from "./assets/LogoWithTextHorizontal.svg";
import Logo from "./assets/logo.svg";
import "./style/indexuserinfo.css";
import "./style/responsive.css"
import axios from 'axios'

const Userinfo = () => {
  const userEmail = localStorage.getItem('userEmail');
  useEffect(() => {
    if (!userEmail) {
      // Redirect to login if email is not found in local storage
      window.location.href = "/signup";
    }
  }, [userEmail]);
  const [State, setState] = useState("");
  const [City, setCity] = useState("");
  const [Member, setMember] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState("");
  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handlemembChange = (e) => {
    setMember(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post('https://ecotracker-t8em.onrender.com/auth/additionalInfo', { email: userEmail, city: City, state: State, familyMembers: Member });
      navigate('/login');
    } catch (error) {
      console.log(email)
      console.log(City)
      console.log(State)
      console.log(Member)
      console.log(error.resp)
      navigate('/signup');
    }
  };
  return (
    <div className="userinf-main">
      <div className="userinf-left">
        <img src={Image} alt="logo" />
      </div>
      <div className="userinf-right">
        <div className="userinf-right-container">
          <div className="userinf-logo">
            <img src={Logo} alt="logo of EcoTracker" className="logo" />
          </div>
          <div className="userinf-center">
            <h2>Welcome !</h2>
            <p>Fill this to get us to know you better</p>
            <form onSubmit={handleSubmit}>
              <input type="number" name="members" onChange={handlemembChange} value={Member} placeholder="Number of members at house" required />
              <select className="state" onChange={handleStateChange} value={State} required>
                <option value="">Select Region</option>
                <option value="ANDAMAN&NICOBARISLANDS">ANDAMAN & NICOBAR ISLANDS</option>
                <option value="ANDHRAPRADESH">ANDHRA PRADESH</option>
                <option value="ARUNACHALPRADESH">ARUNACHAL PRADESH</option>
                <option value="ASSAM">ASSAM</option>
                <option value="BIHAR">BIHAR</option>
                <option value="CHANDIGARH">CHANDIGARH</option>
                <option value="CHHATTISGARH">CHHATTISGARH</option>
                <option value="CHANDIGARH">CHANDIGARH</option>
                <option value="CHHATTISGARH">CHHATTISGARH</option>
                <option value="DADRA&NAGARHAVELI">DADRA & NAGAR HAVELI</option>
                <option value="DAMANANDDIU">DAMAN AND DIU</option>
                <option value="GOA">GOA</option>
                <option value="GUJARAT">GUJARAT</option>
                <option value="HARYANA">HARYANA</option>
                <option value="HIMACHALPRADESH">HIMACHAL PRADESH</option>
                <option value="JAMMUANDKASHMIR">JAMMU AND KASHMIR</option>
                <option value="JHARKHAND">JHARKHAND</option>
                <option value="KARNATAKA">KARNATAKA</option>
                <option value="KERALA">KERALA</option>
                <option value="LAKSHADWEEP">LAKSHADWEEP</option>
                <option value="MADHYAPRADESH">MADHYAPRADESH</option>
                <option value="MAHARASHTRA">MAHARASHTRA</option>
                <option value="MANIPUR">MANIPUR</option>
                <option value="MEGHALAYA">MEGHALAYA</option>
                <option value="MIZORAM">MIZORAM</option>
                <option value="NAGALAND">NAGALAND</option>
                <option value="NCTOFDELHI">NCT OF DELHI</option>
                <option value="ODISHA">ODISHA</option>
                <option value="PUDUCHERRY">PUDUCHERRY</option>
                <option value="PUNJAB">PUNJAB</option>
                <option value="RAJASTHAN">RAJASTHAN</option>
                <option value="SIKKIM">SIKKIM</option>
                <option value="TAMILNADU">TAMIL NADU</option>
                <option value="TELANGANA">TELANGANA</option>
                <option value="TRIPURA">TRIPURA</option>
                <option value="UTTARPRADESH">UTTAR PRADESH</option>
                <option value="UTTARAKHAND">UTTARAKHAND</option>
                <option value="WESTBENGAL">WEST BENGAL</option>
              </select>
              <select className="city" onChange={handleCityChange} value={City} disabled={State === ""} required>
                <option value="">Select City</option>
                {State === "ANDAMAN&NICOBARISLANDS" && (
                  <><option value="Nicobars">Nicobars</option>
                    <option value="NorthandMiddleAndaman">North and Middle Andaman</option>
                    <option value="SouthAndaman">South Andaman</option>
                  </>
                )}
                {State === "ANDHRAPRADESH" && (
                  <><option value="Anantapur">Anantapur</option>
                    <option value="Chittoor">Chittoor</option>
                    <option value="EastGodavari">East Godavari</option>
                    <option value="Guntur">Guntur</option>
                    <option value="Krishna">Krishna</option>
                    <option value="Kurnool">Kurnool</option>
                    <option value="Prakasam">Prakasam</option>
                    <option value="SriPottiSriramuluNellore">Sri Potti Sriramulu Nellore</option>
                    <option value="Srikakulam">Srikakulam</option>
                    <option value="Visakhapatnam">Visakhapatnam</option>
                    <option value="Vizianagaram">Vizianagaram</option>
                    <option value="WestGodavari">West Godavari</option>
                    <option value="Y.S.R.">Y.S.R.</option>
                  </>
                )}
                {State === "ARUNACHALPRADESH" && (
                  <><option value="Anjaw">Anjaw</option>
                    <option value="Changlang">Changlang</option>
                    <option value="DibangValley">Dibang Valley</option>
                    <option value="EastKameng">East Kameng</option>
                    <option value="EastSiang">East Siang</option>
                    <option value="KraDaadi">Kra Daadi</option>
                    <option value="KurungKumey">Kurung Kumey</option>
                    <option value="Lohit">Lohit</option>
                    <option value="LowerDibangValley">Lower Dibang Valley</option>
                    <option value="LowerSiang">Lower Siang</option>
                    <option value="LowerSubansiri">Lower Subansiri</option>
                    <option value="Namsai">Namsai</option>
                    <option value="PapumPare">Papum Pare</option>
                    <option value="Siang">Siang</option>
                    <option value="Tawang">Tawang</option>
                    <option value="Tirap">Tirap</option>
                    <option value="UpperSiang">Upper Siang</option>
                    <option value="UpperSubansiri">Upper Subansiri</option>
                    <option value="WestKameng">West Kameng</option>
                    <option value="WestSiang">West Siang</option>
                  </>
                )}
                {State === "ASSAM" && (
                  <><option value="Baksa">Baksa</option>
                    <option value="Barpeta">Barpeta</option>
                    <option value="Biswanath">Biswanath</option>
                    <option value="Bongaigaon">Bongaigaon</option>
                    <option value="Cachar">Cachar</option>
                    <option value="Charaideo">Charaideo</option>
                    <option value="Chirang">Chirang</option>
                    <option value="Darrang">Darrang</option>
                    <option value="Dhemaji">Dhemaji</option>
                    <option value="Dhubri">Dhubri</option>
                    <option value="Dibrugarh">Dibrugarh</option>
                    <option value="DimaHasao">DimaHasao</option>
                    <option value="Goalpara">Goalpara</option>
                    <option value="Golaghat">Golaghat</option>
                    <option value="Hailakandi">Hailakandi</option>
                    <option value="Hojai">Hojai</option>
                    <option value="Jorhat">Jorhat</option>
                    <option value="Kamrup">Kamrup</option>
                    <option value="KamrupMetropolitan">Kamrup Metropolitan</option>
                    <option value="KarbiAnglong">Karbi Anglong</option>
                    <option value="Karimganj">Karimganj</option>
                    <option value="Kokrajhar">Kokrajhar</option>
                    <option value="Lakhimpur">Lakhimpur</option>
                    <option value="Majuli">Majuli</option>
                    <option value="Morigaon">Morigaon</option>
                    <option value="Nagaon">Nagaon</option>
                    <option value="Nalbari">Nalbari</option>
                    <option value="Sivasagar">Sivasagar</option>
                    <option value="Sonitpur">Sonitpur</option>
                    <option value="SouthSalamara-Mankachar">South Salamara-Mankachar</option>
                    <option value="Tinsukia">Tinsukia</option>
                    <option value="Udalguri">Udalguri</option>
                    <option value="WestKarbiAnglong">West Karbi Anglong</option>
                  </>
                )}
                {State === "BIHAR" && (
                  <><option value="Araria">Araria</option>
                    <option value="Arwal">Arwal</option>
                    <option value="Aurangabad">Aurangabad</option>
                    <option value="Banka">Banka</option>
                    <option value="Begusarai">Begusarai</option>
                    <option value="Bhagalpur">Bhagalpur</option>
                    <option value="Bhojpur">Bhojpur</option>
                    <option value="Buxar">Buxar</option>
                    <option value="Darbhanga">Darbhanga</option>
                    <option value="Gaya">Gaya</option>
                    <option value="Gopalganj">Gopalganj</option>
                    <option value="Jamui">Jamui</option>
                    <option value="Jehanabad">Jehanabad</option>
                    <option value="Kaimur(Bhabua)">Kaimur(Bhabua)</option>
                    <option value="Katihar">Katihar</option>
                    <option value="Khagaria">Khagaria</option>
                    <option value="Kishanganj">Kishanganj</option>
                    <option value="Lakhisarai">Lakhisarai</option>
                    <option value="Madhepura">Madhepura</option>
                    <option value="Madhubani">Madhubani</option>
                    <option value="Munger">Munger</option>
                    <option value="Muzaffarpur">Muzaffarpur</option>
                    <option value="Nalanda">Nalanda</option>
                    <option value="Nawada">Nawada</option>
                    <option value="PashchimChamparan">Pashchim Champaran</option>
                    <option value="Patna">Patna</option>
                    <option value="PurbiChamparan">Purbi Champaran</option>
                    <option value="Purnia">Purnia</option>
                    <option value="Rohtas">Rohtas</option>
                    <option value="Saharsa">Saharsa</option>
                    <option value="Samastipur">Samastipur</option>
                    <option value="Saran">Saran</option>
                    <option value="Sheikhpura">Sheikhpura</option>
                    <option value="Sheohar">Sheohar</option>
                    <option value="Sitamarhi">Sitamarhi</option>
                    <option value="Siwan">Siwan</option>
                    <option value="Supaul">Supaul</option>
                    <option value="Vaishali">Vaishali</option>
                  </>
                )}
                {State === "CHANDIGARH" && (
                  <><option value="Chandigarh">Chandigarh</option>
                  </>
                )}
                {State === "CHHATTISGARH" && (
                  <><option value="Balod">Balod</option>
                    <option value="BalodaBazar">Baloda Bazar</option>
                    <option value="Balrampur">Balrampur</option>
                    <option value="Bastar">Bastar</option>
                    <option value="Bemetara">Bemetara</option>
                    <option value="Bijapur">Bijapur</option>
                    <option value="Bilaspur">Bilaspur</option>
                    <option value="DakshinBastarDantewada">Dakshin Bastar Dantewada</option>
                    <option value="Dhamtari">Dhamtari</option>
                    <option value="Durg">Durg</option>
                    <option value="Gariyaband">Gariyaband</option>
                    <option value="Janjgir-Champa">Janjgir-Champa</option>
                    <option value="Jashpur">Jashpur</option>
                    <option value="Kabeerdham">Kabeerdham</option>
                    <option value="Kondagaon">Kondagaon</option>
                    <option value="Korba">Korba</option>
                    <option value="Koriya">Koriya</option>
                    <option value="Mahasamund">Mahasamund</option>
                    <option value="Mungeli">Mungeli</option>
                    <option value="Narayanpur">Narayanpur</option>
                    <option value="Raigarh">Raigarh</option>
                    <option value="Raipur">Raipur</option>
                    <option value="Rajnandgaon">Rajnandgaon</option>
                    <option value="Sukma">Sukma</option>
                    <option value="Surajpur">Surajpur</option>
                    <option value="Surguja">Surguja</option>
                    <option value="UttarBastarKanker">Uttar Bastar Kanker</option>
                  </>
                )}
                {State === "DADRA&NAGARHAVELI" && (
                  <><option value="DadraandNagarHaveli">Dadra and Nagar Haveli</option>
                  </>
                )}
                {State === "DAMANANDDIU" && (
                  <><option value="Daman">Daman</option>
                    <option value="Diu">Diu</option>
                  </>
                )}
                {State === "GOA" && (
                  <><option value="NorthGoa">Nort hGoa</option>
                    <option value="SouthGoa">South Goa</option>
                  </>
                )}
                {State === "GUJARAT" && (
                  <><option value="Ahmadabad">Ahmadabad</option>
                    <option value="Amreli">Amreli</option>
                    <option value="Anand">Anand</option>
                    <option value="Arvalli">Arvalli</option>
                    <option value="BanasKantha">Banas Kantha</option>
                    <option value="Bharuch">Bharuch</option>
                    <option value="Bhavnagar">Bhavnagar</option>
                    <option value="Botad">Botad</option>
                    <option value="ChhotaUdepur">Chhota Udepur</option>
                    <option value="DevbhoomiDwarka">Devbhoomi Dwarka</option>
                    <option value="Dohad">Dohad</option>
                    <option value="Gandhinagar">Gandhinagar</option>
                    <option value="GirSomnath">Gir Somnath</option>
                    <option value="Jamnagar">Jamnagar</option>
                    <option value="Junagadh">Junagadh</option>
                    <option value="Kachchh">Kachchh</option>
                    <option value="Kheda">Kheda</option>
                    <option value="Mahesana">Mahesana</option>
                    <option value="Mahisagar">Mahisagar</option>
                    <option value="Morbi">Morbi</option>
                    <option value="Narmada">Narmada</option>
                    <option value="Navsari">Navsari</option>
                    <option value="PanchMahals">Panch Mahals</option>
                    <option value="Patan">Patan</option>
                    <option value="Porbandar">Porbandar</option>
                    <option value="Rajkot">Rajkot</option>
                    <option value="SabarKantha">Sabar Kantha</option>
                    <option value="Surat">Surat</option>
                    <option value="Surendranagar">Surendranagar</option>
                    <option value="Tapi">Tapi</option>
                    <option value="TheDangs">The Dangs</option>
                    <option value="Vadodara">Vadodara</option>
                    <option value="Valsad">Valsad</option>
                  </>
                )}
                {State === "HARYANA" && (
                  <><option value="Ambala">Ambala</option>
                    <option value="Bhiwani">Bhiwani</option>
                    <option value="CharkhiDadri">Charkhi Dadri</option>
                    <option value="Faridabad">Faridabad</option>
                    <option value="Fatehabad">Fatehabad</option>
                    <option value="Gurgaon">Gurgaon</option>
                    <option value="Hisar">Hisar</option>
                    <option value="Jhajjar">Jhajjar</option>
                    <option value="Jind">Jind</option>
                    <option value="Kaithal">Kaithal</option>
                    <option value="Karnal">Karnal</option>
                    <option value="Kurukshetra">Kurukshetra</option>
                    <option value="Mahendragarh">Mahendragarh</option>
                    <option value="Mewat">Mewat</option>
                    <option value="Palwal">Palwal</option>
                    <option value="Panchkula">Panchkula</option>
                    <option value="Panipat">Panipat</option>
                    <option value="Rewari">Rewari</option>
                    <option value="Rohtak">Rohtak</option>
                    <option value="Sirsa">Sirsa</option>
                    <option value="Sonipat">Sonipat</option>
                    <option value="Yamunanagar">Yamunanagar</option>
                  </>
                )}
                {State === "HIMACHALPRADESH" && (
                  <><option value="BilaspurHP">Bilaspur</option>
                    <option value="Chamba">Chamba</option>
                    <option value="Hamirpur">Hamirpur</option>
                    <option value="Kangra">Kangra</option>
                    <option value="Kinnaur">Kinnaur</option>
                    <option value="Kullu">Kullu</option>
                    <option value="LahulSpiti">Lahul Spiti</option>
                    <option value="Mandi">Mandi</option>
                    <option value="Shimla">Shimla</option>
                    <option value="Sirmaur">Sirmaur</option>
                    <option value="Solan">Solan</option>
                    <option value="Una">Una</option>
                  </>
                )}
                {State === "JAMMUANDKASHMIR" && (
                  <><option value="Anantnag">Anantnag</option>
                    <option value="Badgam">Badgam</option>
                    <option value="Bandipore">Bandipore</option>
                    <option value="Baramula">Baramula</option>
                    <option value="Doda">Doda</option>
                    <option value="Ganderbal">Ganderbal</option>
                    <option value="Jammu">Jammu</option>
                    <option value="Kargil">Kargil</option>
                    <option value="Kathua">Kathua</option>
                    <option value="Kishtwar">Kishtwar</option>
                    <option value="Kulgam">Kulgam</option>
                    <option value="Kupwara">Kupwara</option>
                    <option value="Leh(Ladakh)">Leh(Ladakh)</option>
                    <option value="Pulwama">Pulwama</option>
                    <option value="Punch">Punch</option>
                    <option value="Rajouri">Rajouri</option>
                    <option value="Ramban">Ramban</option>
                    <option value="Reasi">Reasi</option>
                    <option value="Samba">Samba</option>
                    <option value="Shupiyan">Shupiyan</option>
                    <option value="Srinagar">Srinagar</option>
                    <option value="Udhampur">Udhampur</option>
                  </>
                )}
                {State === "JHARKHAND" && (
                  <><option value="Bokaro">Bokaro</option>
                    <option value="Chatra">Chatra</option>
                    <option value="Deoghar">Deoghar</option>
                    <option value="Dhanbad">Dhanbad</option>
                    <option value="Dumka">Dumka</option>
                    <option value="Garhwa">Garhwa</option>
                    <option value="Giridih">Giridih</option>
                    <option value="Godda">Godda</option>
                    <option value="Gumla">Gumla</option>
                    <option value="Hazaribagh">Hazaribagh</option>
                    <option value="Jamtara">Jamtara</option>
                    <option value="Khunti">Khunti</option>
                    <option value="Kodarma">Kodarma</option>
                    <option value="Latehar">Latehar</option>
                    <option value="Lohardaga">Lohardaga</option>
                    <option value="Pakur">Pakur</option>
                    <option value="Palamu">Palamu</option>
                    <option value="PashchimiSinghbhum">Pashchimi Singhbhum</option>
                    <option value="PurbiSinghbhum">Purbi Singhbhum</option>
                    <option value="Ramgarh">Ramgarh</option>
                    <option value="Ranchi">Ranchi</option>
                    <option value="Sahibganj">Sahibganj</option>
                    <option value="Saraikela-Kharsawan">Saraikela-Kharsawan</option>
                    <option value="Simdega">Simdega</option>
                  </>
                )}
                {State === "KARNATAKA" && (
                  <><option value="Bagalkot">Bagalkot</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="BangaloreRural">Bangalore Rural</option>
                    <option value="Belgaum">Belgaum</option>
                    <option value="Bellary">Bellary</option>
                    <option value="Bidar">Bidar</option>
                    <option value="BijapurKA">Bijapur</option>
                    <option value="Chamarajanagar">Chamarajanagar</option>
                    <option value="Chikkaballapura">Chikkaballapura</option>
                    <option value="Chikmagalur">Chikmagalur</option>
                    <option value="Chitradurga">Chitradurga</option>
                    <option value="DakshinaKannada">Dakshina Kannada</option>
                    <option value="Davanagere">Davanagere</option>
                    <option value="Dharwad">Dharwad</option>
                    <option value="Gadag">Gadag</option>
                    <option value="Gulbarga">Gulbarga</option>
                    <option value="Hassan">Hassan</option>
                    <option value="Haveri">Haveri</option>
                    <option value="Kodagu">Kodagu</option>
                    <option value="Kolar">Kolar</option>
                    <option value="Koppal">Koppal</option>
                    <option value="Mandya">Mandya</option>
                    <option value="Mysore">Mysore</option>
                    <option value="Raichur">Raichur</option>
                    <option value="Ramanagara">Ramanagara</option>
                    <option value="Shimoga">Shimoga</option>
                    <option value="Tumkur">Tumkur</option>
                    <option value="Udupi">Udupi</option>
                    <option value="UttaraKannada">Uttara Kannada</option>
                    <option value="Yadgir">Yadgir</option>
                  </>
                )}
                {State === "KERALA" && (
                  <><option value="Alappuzha">Alappuzha</option>
                    <option value="Ernakulam">Ernakulam</option>
                    <option value="Idukki">Idukki</option>
                    <option value="Kannur">Kannur</option>
                    <option value="Kasaragod">Kasaragod</option>
                    <option value="Kollam">Kollam</option>
                    <option value="Kottayam">Kottayam</option>
                    <option value="Kozhikode">Kozhikode</option>
                    <option value="Malappuram">Malappuram</option>
                    <option value="Palakkad">Palakkad</option>
                    <option value="Pathanamthitta">Pathanamthitta</option>
                    <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                    <option value="Thrissur">Thrissur</option>
                    <option value="Wayanad">Wayanad</option>
                  </>
                )}
                {State === "LAKSHADWEEP" && (
                  <><option value="Lakshadweep">Lakshadweep</option>
                  </>
                )}
                {State === "MADHYAPRADESH" && (
                  <><option value="AgarMalwa">AgarMalwa</option>
                    <option value="Alirajpur">Alirajpur</option>
                    <option value="Anuppur">Anuppur</option>
                    <option value="Ashoknagar">Ashoknagar</option>
                    <option value="Balaghat">Balaghat</option>
                    <option value="Barwani">Barwani</option>
                    <option value="Betul">Betul</option>
                    <option value="Bhind">Bhind</option>
                    <option value="Bhopal">Bhopal</option>
                    <option value="Burhanpur">Burhanpur</option>
                    <option value="Chhatarpur">Chhatarpur</option>
                    <option value="Chhindwara">Chhindwara</option>
                    <option value="Damoh">Damoh</option>
                    <option value="Datia">Datia</option>
                    <option value="Dewas">Dewas</option>
                    <option value="Dhar">Dhar</option>
                    <option value="Dindori">Dindori</option>
                    <option value="Guna">Guna</option>
                    <option value="Gwalior">Gwalior</option>
                    <option value="Harda">Harda</option>
                    <option value="Hoshangabad">Hoshangabad</option>
                    <option value="Indore">Indore</option>
                    <option value="Jabalpur">Jabalpur</option>
                    <option value="Jhabua">Jhabua</option>
                    <option value="Katni">Katni</option>
                    <option value="Khandwa(EastNimar)">Khandwa(EastNimar)</option>
                    <option value="Khargone(WestNimar)">Khargone(WestNimar)</option>
                    <option value="Mandla">Mandla</option>
                    <option value="Mandsaur">Mandsaur</option>
                    <option value="Morena">Morena</option>
                    <option value="Narsimhapur">Narsimhapur</option>
                    <option value="Neemuch">Neemuch</option>
                    <option value="Panna">Panna</option>
                    <option value="Raisen">Raisen</option>
                    <option value="Rajgarh">Rajgarh</option>
                    <option value="Ratlam">Ratlam</option>
                    <option value="Rewa">Rewa</option>
                    <option value="Sagar">Sagar</option>
                    <option value="Satna">Satna</option>
                    <option value="Sehore">Sehore</option>
                    <option value="Seoni">Seoni</option>
                    <option value="Shahdol">Shahdol</option>
                    <option value="Shajapur">Shajapur</option>
                    <option value="Sheopur">Sheopur</option>
                    <option value="Shivpuri">Shivpuri</option>
                    <option value="Sidhi">Sidhi</option>
                    <option value="Singrauli">Singrauli</option>
                    <option value="Tikamgarh">Tikamgarh</option>
                    <option value="Ujjain">Ujjain</option>
                    <option value="Umaria">Umaria</option>
                    <option value="Vidisha">Vidisha</option>
                  </>
                )}
                {State === "MAHARASHTRA" && (
                  <><option value="Ahmadnagar">Ahmadnagar</option>
                    <option value="Akola">Akola</option>
                    <option value="Amravati">Amravati</option>
                    <option value="AurangabadMH">Aurangabad</option>
                    <option value="Bhandara">Bhandara</option>
                    <option value="Bid">Bid</option>
                    <option value="Buldana">Buldana</option>
                    <option value="Chandrapur">Chandrapur</option>
                    <option value="Dhule">Dhule</option>
                    <option value="Gadchiroli">Gadchiroli</option>
                    <option value="Gondiya">Gondiya</option>
                    <option value="Hingoli">Hingoli</option>
                    <option value="Jalgaon">Jalgaon</option>
                    <option value="Jalna">Jalna</option>
                    <option value="Kolhapur">Kolhapur</option>
                    <option value="Latur">Latur</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="MumbaiSuburban">Mumbai Suburban</option>
                    <option value="Nagpur">Nagpur</option>
                    <option value="Nanded">Nanded</option>
                    <option value="Nandurbar">Nandurbar</option>
                    <option value="Nashik">Nashik</option>
                    <option value="Osmanabad">Osmanabad</option>
                    <option value="Palghar">Palghar</option>
                    <option value="Parbhani">Parbhani</option>
                    <option value="Pune">Pune</option>
                    <option value="RaigarhMH">Raigarh</option>
                    <option value="Ratnagiri">Ratnagiri</option>
                    <option value="Sangli">Sangli</option>
                    <option value="Satara">Satara</option>
                    <option value="Sindhudurg">Sindhudurg</option>
                    <option value="Solapur">Solapur</option>
                    <option value="Thane">Thane</option>
                    <option value="Wardha">Wardha</option>
                    <option value="Washim">Washim</option>
                    <option value="Yavatmal">Yavatmal</option>
                  </>
                )}
                {State === "MANIPUR" && (
                  <><option value="Bishnupur">Bishnupur</option>
                    <option value="Chandel">Chandel</option>
                    <option value="Churachandpur">Churachandpur</option>
                    <option value="ImphalEast">Imphal East</option>
                    <option value="ImphalWest">Imphal West</option>
                    <option value="Jiribam">Jiribam</option>
                    <option value="Kakching">Kakching</option>
                    <option value="Kamjong">Kamjong</option>
                    <option value="Kangpokpi">Kangpokpi</option>
                    <option value="Noney">Noney</option>
                    <option value="Pherzawl">Pherzawl</option>
                    <option value="Senapati">Senapati</option>
                    <option value="Tamenglong">Tamenglong</option>
                    <option value="Tengnoupal">Tengnoupal</option>
                    <option value="Thoubal">Thoubal</option>
                    <option value="Ukhrul">Ukhrul</option>
                  </>
                )}
                {State === "MEGHALAYA" && (
                  <><option value="EastGaroHills">East Garo Hills</option>
                    <option value="EastJaintiaHills">East Jaintia Hills</option>
                    <option value="EastKhasiHills">East Khasi Hills</option>
                    <option value="JaintiaHills">Jaintia Hills</option>
                    <option value="NorthGaroHills">North Garo Hills</option>
                    <option value="Ribhoi">Ribhoi</option>
                    <option value="SouthGaroHills">South Garo Hills</option>
                    <option value="SouthWestGaroHills">South West Garo Hills</option>
                    <option value="SouthWestKhasiHills">South West Khasi Hills</option>
                    <option value="WestGaroHills">West Garo Hills</option>
                    <option value="WestJaintiaHills">West Jaintia Hills</option>
                    <option value="WestKhasiHills">West Khasi Hills</option>
                  </>
                )}
                {State === "NAGALAND" && (
                  <><option value="Dimapur">Dimapur</option>
                    <option value="Kiphire">Kiphire</option>
                    <option value="Kohima">Kohima</option>
                    <option value="Longleng">Longleng</option>
                    <option value="Mokokchung">Mokokchung</option>
                    <option value="Mon">Mon</option>
                    <option value="Peren">Peren</option>
                    <option value="Phek">Phek</option>
                    <option value="Tuensang">Tuensang</option>
                    <option value="Wokha">Wokha</option>
                    <option value="Zunheboto">Zunheboto</option>
                  </>
                )}
                {State === "NCTOFDELHI" && (
                  <><option value="Central">Central Delhi</option>
                    <option value="East">East Delhi</option>
                    <option value="NewDelhi">New Delhi</option>
                    <option value="North">North Delhi</option>
                    <option value="NorthEast">North East Delhi</option>
                    <option value="NorthWest">North West Delhi</option>
                    <option value="Shahdara">Shahdara</option>
                    <option value="South">South Delhi</option>
                    <option value="SouthEastDelhi">South East Delhi</option>
                    <option value="SouthWestDelhi">South West Delhi</option>
                    <option value="West">West Delhi</option>
                  </>
                )}
                {State === "ODISHA" && (
                  <><option value="Anugul">Anugul</option>
                    <option value="Balangir">Balangir</option>
                    <option value="Baleshwar">Baleshwar</option>
                    <option value="Bargarh">Bargarh</option>
                    <option value="Baudh">Baudh</option>
                    <option value="Bhadrak">Bhadrak</option>
                    <option value="Cuttack">Cuttack</option>
                    <option value="Debagarh">Debagarh</option>
                    <option value="Dhenkanal">Dhenkanal</option>
                    <option value="Gajapati">Gajapati</option>
                    <option value="Ganjam">Ganjam</option>
                    <option value="Jagatsinghapur">Jagatsinghapur</option>
                    <option value="Jajapur">Jajapur</option>
                    <option value="Jharsuguda">Jharsuguda</option>
                    <option value="Kalahandi">Kalahandi</option>
                    <option value="Kandhamal">Kandhamal</option>
                    <option value="Kendrapara">Kendrapara</option>
                    <option value="Kendujhar">Kendujhar</option>
                    <option value="Khordha">Khordha</option>
                    <option value="Koraput">Koraput</option>
                    <option value="Malkangiri">Malkangiri</option>
                    <option value="Mayurbhanj">Mayurbhanj</option>
                    <option value="Nabarangapur">Nabarangapur</option>
                    <option value="Nayagarh">Nayagarh</option>
                    <option value="Nuapada">Nuapada</option>
                    <option value="Puri">Puri</option>
                    <option value="Rayagada">Rayagada</option>
                    <option value="Sambalpur">Sambalpur</option>
                    <option value="Subarnapur">Subarnapur</option>
                    <option value="Sundargarh">Sundargarh</option>
                  </>
                )}
                {State === "PUDUCHERRY" && (
                  <><option value="Karaikal">Karaikal</option>
                    <option value="Mahe">Mahe</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Yanam">Yanam</option>
                  </>
                )}
                {State === "PUNJAB" && (
                  <><option value="Amritsar">Amritsar</option>
                    <option value="Barnala">Barnala</option>
                    <option value="Bathinda">Bathinda</option>
                    <option value="Faridkot">Faridkot</option>
                    <option value="FatehgarhSahib">Fatehgarh Sahib</option>
                    <option value="Fazilka">Fazilka</option>
                    <option value="Firozpur">Firozpur</option>
                    <option value="Gurdaspur">Gurdaspur</option>
                    <option value="Hoshiarpur">Hoshiarpur</option>
                    <option value="Jalandhar">Jalandhar</option>
                    <option value="Kapurthala">Kapurthala</option>
                    <option value="Ludhiana">Ludhiana</option>
                    <option value="Mansa">Mansa</option>
                    <option value="Moga">Moga</option>
                    <option value="Muktsar">Muktsar</option>
                    <option value="Pathankot">Pathankot</option>
                    <option value="Patiala">Patiala</option>
                    <option value="Rupnagar">Rupnagar</option>
                    <option value="SahibzadaAjitSinghNagar">Sahibzada Ajit Singh Nagar</option>
                    <option value="Sangrur">Sangrur</option>
                    <option value="ShahidBhagatSinghNagar">Shahid Bhagat Singh Nagar</option>
                    <option value="TarnTaran">Tarn Taran</option>
                  </>
                )}
                {State === "RAJASTHAN" && (
                  <><option value="Ajmer">Ajmer</option>
                    <option value="Alwar">Alwar</option>
                    <option value="Banswara">Banswara</option>
                    <option value="Baran">Baran</option>
                    <option value="Barmer">Barmer</option>
                    <option value="Bharatpur">Bharatpur</option>
                    <option value="Bhilwara">Bhilwara</option>
                    <option value="Bikaner">Bikaner</option>
                    <option value="Bundi">Bundi</option>
                    <option value="Chittaurgarh">Chittaurgarh</option>
                    <option value="Churu">Churu</option>
                    <option value="Dausa">Dausa</option>
                    <option value="Dhaulpur">Dhaulpur</option>
                    <option value="Dungarpur">Dungarpur</option>
                    <option value="Hanumangarh">Hanumangarh</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Jaisalmer">Jaisalmer</option>
                    <option value="Jalor">Jalor</option>
                    <option value="Jhalawar">Jhalawar</option>
                    <option value="Jhunjhunun">Jhunjhunun</option>
                    <option value="Jodhpur">Jodhpur</option>
                    <option value="Karauli">Karauli</option>
                    <option value="Kota">Kota</option>
                    <option value="Nagaur">Nagaur</option>
                    <option value="Pali">Pali</option>
                    <option value="Pratapgarh">Pratapgarh</option>
                    <option value="Rajsamand">Rajsamand</option>
                    <option value="SawaiMadhopur">Sawai Madhopur</option>
                    <option value="Sikar">Sikar</option>
                    <option value="Sirohi">Sirohi</option>
                    <option value="SriGanganagar">Sri Ganganagar</option>
                    <option value="Tonk">Tonk</option>
                    <option value="Udaipur">Udaipur</option>
                  </>
                )}
                {State === "SIKKIM" && (
                  <><option value="EastDistrict">East District</option>
                    <option value="NorthDistrict">North District</option>
                    <option value="SouthDistrict">South District</option>
                    <option value="WestDistrict">West District</option>
                  </>
                )}
                {State === "TAMILNADU" && (
                  <><option value="Ariyalur">Ariyalur</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Cuddalore">Cuddalore</option>
                    <option value="Dharmapuri">Dharmapuri</option>
                    <option value="Dindigul">Dindigul</option>
                    <option value="Erode">Erode</option>
                    <option value="Kancheepuram">Kancheepuram</option>
                    <option value="Kanniyakumari">Kanniyakumari</option>
                    <option value="Karur">Karur</option>
                    <option value="Krishnagiri">Krishnagiri</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Nagapattinam">Nagapattinam</option>
                    <option value="Namakkal">Namakkal</option>
                    <option value="Perambalur">Perambalur</option>
                    <option value="Pudukkottai">Pudukkottai</option>
                    <option value="Ramanathapuram">Ramanathapuram</option>
                    <option value="Salem">Salem</option>
                    <option value="Sivaganga">Sivaganga</option>
                    <option value="Thanjavur">Thanjavur</option>
                    <option value="TheNilgiris">The Nilgiris</option>
                    <option value="Theni">Theni</option>
                    <option value="Thiruvallur">Thiruvallur</option>
                    <option value="Thiruvarur">Thiruvarur</option>
                    <option value="Thoothukkudi">Thoothukkudi</option>
                    <option value="Tiruchirappalli">Tiruchirappalli</option>
                    <option value="Tirunelveli">Tirunelveli</option>
                    <option value="Tiruppur">Tiruppur</option>
                    <option value="Tiruvannamalai">Tiruvannamalai</option>
                    <option value="Vellore">Vellore</option>
                    <option value="Viluppuram">Viluppuram</option>
                    <option value="Virudhunagar">Virudhunagar</option>
                  </>
                )}
                {State === "TELANGANA" && (
                  <><option value="Adilabad">Adilabad</option>
                    <option value="Bhadradri">Bhadradri</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Jagtial">Jagtial</option>
                    <option value="Jangaon">Jangaon</option>
                    <option value="Jayashankar">Jayashankar</option>
                    <option value="Jogulamba">Jogulamba</option>
                    <option value="Kamareddy">Kamareddy</option>
                    <option value="Karimnagar">Karimnagar</option>
                    <option value="Khammam">Khammam</option>
                    <option value="KomaramBheem">Komaram Bheem</option>
                    <option value="Mahabubabad">Mahabubabad</option>
                    <option value="Mahbubnagar">Mahbubnagar</option>
                    <option value="Mancherial">Mancherial</option>
                    <option value="Medak">Medak</option>
                    <option value="Medchal-Malkajgiri">Medchal-Malkajgiri</option>
                    <option value="Nagarkurnool">Nagarkurnool</option>
                    <option value="Nalgonda">Nalgonda</option>
                    <option value="Nirmal">Nirmal</option>
                    <option value="Nizamabad">Nizamabad</option>
                    <option value="Peddapalli">Peddapalli</option>
                    <option value="Rajanna">Rajanna</option>
                    <option value="Rangareddy">Rangareddy</option>
                    <option value="Sangareddy">Sangareddy</option>
                    <option value="Siddipet">Siddipet</option>
                    <option value="Suryapet">Suryapet</option>
                    <option value="Vikarabad">Vikarabad</option>
                    <option value="Wanaparthy">Wanaparthy</option>
                    <option value="WarangalRural">Warangal Rural</option>
                    <option value="WarangalUrban">Waranga lUrban</option>
                    <option value="Yadadri">Yadadri</option>
                  </>
                )}
                {State === "TRIPURA" && (
                  <><option value="Dhalai">Dhalai</option>
                    <option value="Gomati">Gomati</option>
                    <option value="Khowai">Khowai</option>
                    <option value="NorthTripura">North Tripura</option>
                    <option value="Sepahijala">Sepahijala</option>
                    <option value="SouthTripura">South Tripura</option>
                    <option value="Unakoti">Unakoti</option>
                    <option value="WestTripura">West Tripura</option>
                  </>
                )}
                {State === "UTTARPRADESH" && (
                  <><option value="Agra">Agra</option>
                    <option value="Aligarh">Aligarh</option>
                    <option value="Allahabad">Allahabad</option>
                    <option value="AmbedkarNagar">Ambedkar Nagar</option>
                    <option value="Amethi">Amethi</option>
                    <option value="Amroha">Amroha</option>
                    <option value="Auraiya">Auraiya</option>
                    <option value="Azamgarh">Azamgarh</option>
                    <option value="Baghpat">Baghpat</option>
                    <option value="Bahraich">Bahraich</option>
                    <option value="Ballia">Ballia</option>
                    <option value="BalrampurUP">Balrampur</option>
                    <option value="Banda">Banda</option>
                    <option value="BaraBanki">Bara Banki</option>
                    <option value="Bareilly">Bareilly</option>
                    <option value="Basti">Basti</option>
                    <option value="Bhadohi">Bhadohi</option>
                    <option value="Bijnor">Bijnor</option>
                    <option value="Budaun">Budaun</option>
                    <option value="Bulandshahr">Bulandshahr</option>
                    <option value="Chandauli">Chandauli</option>
                    <option value="Chitrakoot">Chitrakoot</option>
                    <option value="Deoria">Deoria</option>
                    <option value="Etah">Etah</option>
                    <option value="Etawah">Etawah</option>
                    <option value="Faizabad">Faizabad</option>
                    <option value="Farrukhabad">Farrukhabad</option>
                    <option value="Fatehpur">Fatehpur</option>
                    <option value="Firozabad">Firozabad</option>
                    <option value="GautamBuddhaNagar">Gautam Buddha Nagar</option>
                    <option value="Ghaziabad">Ghaziabad</option>
                    <option value="Ghazipur">Ghazipur</option>
                    <option value="Gonda">Gonda</option>
                    <option value="Gorakhpur">Gorakhpur</option>
                    <option value="HamirpurUP">Hamirpur</option>
                    <option value="Hapur">Hapur</option>
                    <option value="Hardoi">Hardoi</option>
                    <option value="Hathras">Hathras</option>
                    <option value="Jalaun">Jalaun</option>
                    <option value="Jaunpur">Jaunpur</option>
                    <option value="Jhansi">Jhansi</option>
                    <option value="Kannauj">Kannauj</option>
                    <option value="KanpurDehat">KanpurDehat</option>
                    <option value="KanpurNagar">KanpurNagar</option>
                    <option value="Kasganj">Kasganj</option>
                    <option value="Kaushambi">Kaushambi</option>
                    <option value="Kheri">Kheri</option>
                    <option value="Kushinagar">Kushinagar</option>
                    <option value="Lalitpur">Lalitpur</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Mahoba">Mahoba</option>
                    <option value="Mahrajganj">Mahrajganj</option>
                    <option value="Mainpuri">Mainpuri</option>
                    <option value="Mathura">Mathura</option>
                    <option value="Mau">Mau</option>
                    <option value="Meerut">Meerut</option>
                    <option value="Mirzapur">Mirzapur</option>
                    <option value="Moradabad">Moradabad</option>
                    <option value="Muzaffarnagar">Muzaffarnagar</option>
                    <option value="Pilibhit">Pilibhit</option>
                    <option value="PratapgarhUP">Pratapgarh</option>
                    <option value="RaeBareli">RaeBareli</option>
                    <option value="Rampur">Rampur</option>
                    <option value="Saharanpur">Saharanpur</option>
                    <option value="Sambhal">Sambhal</option>
                    <option value="SantKabirNagar">SantKabirNagar</option>
                    <option value="Shahjahanpur">Shahjahanpur</option>
                    <option value="Shamli">Shamli</option>
                    <option value="Shrawasti">Shrawasti</option>
                    <option value="Siddharthnagar">Siddharthnagar</option>
                    <option value="Sitapur">Sitapur</option>
                    <option value="Sonbhadra">Sonbhadra</option>
                    <option value="Sultanpur">Sultanpur</option>
                    <option value="Unnao">Unnao</option>
                    <option value="Varanasi">Varanasi</option>
                  </>
                )}
                {State === "UTTARAKHAND" && (
                  <><option value="Almora">Almora</option>
                    <option value="Bageshwar">Bageshwar</option>
                    <option value="Chamoli">Chamoli</option>
                    <option value="Champawat">Champawat</option>
                    <option value="Dehradun">Dehradun</option>
                    <option value="Garhwal">Garhwal</option>
                    <option value="Hardwar">Hardwar</option>
                    <option value="Nainital">Nainital</option>
                    <option value="Pithoragarh">Pithoragarh</option>
                    <option value="Rudraprayag">Rudraprayag</option>
                    <option value="TehriGarhwal">Tehri Garhwal</option>
                    <option value="UdhamSinghNagar">Udham Singh Nagar</option>
                    <option value="Uttarkashi">Uttarkashi</option>
                  </>
                )}
                {State === "WESTBENGAL" && (
                  <><option value="Alipurduar">Alipurduar</option>
                    <option value="Bankura">Bankura</option>
                    <option value="Barddhaman">Barddhaman</option>
                    <option value="Birbhum">Birbhum</option>
                    <option value="DakshinDinajpur">Dakshin Dinajpur</option>
                    <option value="Darjiling">Darjiling</option>
                    <option value="Haora">Haora</option>
                    <option value="Hugli">Hugli</option>
                    <option value="Jalpaiguri">Jalpaiguri</option>
                    <option value="Jhargram">Jhargram</option>
                    <option value="Kalimpong">Kalimpong</option>
                    <option value="KochBihar">KochBihar</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Maldah">Maldah</option>
                    <option value="Murshidabad">Murshidabad</option>
                    <option value="Nadia">Nadia</option>
                    <option value="NorthTwentyFourParganas">North Twenty Four Parganas</option>
                    <option value="PaschimBardhaman">Paschim Bardhaman</option>
                    <option value="PaschimMedinipur">Paschim Medinipur</option>
                    <option value="PurbaBardhaman">Purba Bardhaman</option>
                    <option value="PurbaMedinipur">Purba Medinipur</option>
                    <option value="Puruliya">Puruliya</option>
                    <option value="SouthTwentyFourParganas">South Twenty Four Parganas</option>
                    <option value="UttarDinajpur">Uttar Dinajpur</option>
                  </>
                )}
              </select>
              <div className="userinf-center-options">
                <div className="remember-div">
                  <div className="details">
                    <input type="checkbox" id="remember-checkbox" required />
                    <label htmlFor="remember-checkbox">
                      This form contains correct details as per my knowledge.
                    </label>
                  </div>
                  <div className="privacy">
                    <input type="checkbox" id="priv-checkbox" required />
                    <label htmlFor="priv-checkbox">
                      I accept <a href="privacy" className="link">T&C and Privacy Policy</a>.
                    </label>
                  </div>
                </div>
              </div>
              <div className="userinf-center-buttons">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <p className="userinf-bottom-p">
            This form can only be filled once. Please fill it carefully.
          </p>
        </div>
      </div >
    </div >
  );
};

export default Userinfo;
