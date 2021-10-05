import { Container, Table, Card } from "react-bootstrap";

const DivComponent=({active})=> {
    return ( 
        <Container>
            {active==="About ASWL" && 
              <Container>
                  <div>
                      <h5>About ASWL</h5>
                      <p>The journey of Arunima Group began as a small venture in a two-storied building. Today, its business, in the name of Arunima Sports Wear Limited, has evolved into a full-fledged, nine-storied establishment working at full capacity. Arunima Group launched with woven tops and slowly developed new lines like knitwear and woven bottoms. Arunima Group has worked with several well-known/renowned brands such as Wrangler, Lee, Nautica, North Face, Timberland, among many others. With full technical support from VF engineers, Arunima Group has reached its current potential and growing at a significant pace. With the industry flourishing, Arunima Group has exciting plans for the future with various upcoming projects and developing its current ones to reach its full potential.</p>
                  </div>
                  <div>
                  <h5>Marketing & Merchandising</h5>
                  <p>Keeping customer satisfaction in mind, both marketing and merchandising operations are kept under the direct supervision of the management itself. With over 10 teams of highly experienced merchandisers, each dedicated to individual buyers, we are able to keep track of orders from the inception of the products right to their shipment.</p>
                  </div>
              </Container>
              }
            {active==="Factory Space" && 
             <Container>
               <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Area</th>
                    <th>Space</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Factory Land Area</td>
                    <td>64,799.41 Sqft</td>
                    </tr>

                    <tr>
                    <td>Total Land Area Occupied</td>
                    <td>44,297 Sqft</td>
                    </tr>

                    <tr>
                    <td>Building Space (9 Stories)</td>
                    <td>202,500 Sqft</td>
                    </tr>

                    <tr>
                    <td>Tin Shed Store</td>
                    <td>10,800 Sqft</td>
                    </tr>

                    <tr>
                    <td>Dining Room	</td>
                    <td>4,000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Boiler Room	</td>
                    <td>1,090 Sqft</td>
                    </tr>

                    <tr>
                    <td>Generator Room	</td>
                    <td>1,030 Sqft</td>
                    </tr>

                    <tr>
                    <td>Jut & G/Room Medical & Daycare	</td>
                    <td>1,320 Sqft</td>
                    </tr>

                    <tr>
                    <td>Compressor Room	</td>
                    <td>190 Sqft</td>
                    </tr>

                    <tr>
                    <td>2 Steel Stair	</td>
                    <td>842 Sqft</td>
                    </tr>

                    <tr>
                    <td>Lubricant Room	</td>
                    <td>115 Sqft</td>
                    </tr>

                    <tr>
                    <td>Fire Command, Pump House & Office Room	</td>
                    <td>810 Sqft</td>
                    </tr>

                    <tr>
                    <td>4 Storied Utility Building(650 sqft per floor)</td>
                    <td>2600 Sqft</td>
                    </tr>
                </tbody>
                </Table>  
             </Container>
            }
            {active==="Capacity" && 
            <Container>
                <Card body className="mb-3 text-center">Annual Turn Over 2014-15</Card>
                <Table striped bordered hover >
                <thead>
                    <tr>
                    <th>Category</th>
                    <th>Quantity</th>
                   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Knit Wear</td>
                    <td>800,000 Pcs</td>
                    
                    </tr>
                    <tr>
                    <td>Woven Bottom	</td>
                    <td>450,000 Pcs</td>
                    
                    </tr>
                    <tr>
                    <td>Total	</td>
                    <td >1,250,000 Pcs/Month</td>
                   
                    </tr>
                </tbody>
                </Table>
                <Card body className="mb-3 text-center">USD 42.00 Million</Card>
                <Card body className="mb-3 text-center">Annual Turn Over 2015-16</Card>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Category</th>
                    <th>Quantity</th>
                   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Knit Wear</td>
                    <td>800,000 Pcs</td>
                    
                    </tr>
                    <tr>
                    <td>Woven Bottom	</td>
                    <td>500,000 Pcs</td>
                    
                    </tr>
                    <tr>
                    <td>Total	</td>
                    <td >1,300,000 Pcs/Month</td>
                   
                    </tr>
                </tbody>
                </Table>
                <Card body className="mb-3 text-center">USD 45.00 Million</Card>
                <h5>Marketing & Merchandising</h5>
                <p>Keeping customer satisfaction in mind, both marketing and merchandising operations are kept under the direct supervision of the management itself. With over 10 teams of highly experienced merchandisers, each dedicated to individual buyers, we are able to keep track of orders from the inception of the products right to their shipment.</p>

            </Container>
            }
            {active==="Buyer" && 
            <Container>
                <h5>Buyer & Exporting Countries</h5>
                <p>
                <b>Knitwear :</b>
                Charles Komar & Sons [Walmart, GAP, Target, Komar Kids, PRIMARK], KIABI, PPT [Beneton], Parlico [Siegfried] , TCP, CDF [Walmart].<br></br>
                <b>Woven  :</b>
                VF Asia [Walmart, Lee, Wrangler, K-mart, SHOPKO, Zellers, Target], Max [Cortefiel], TCNS [Charming Shop, Diaz, Meijers, Sears, Richlu, NYGARD, K-mart, Belk], TCP , Parlico [Siegfried, POP, Dynamite, Garage]<br></br>
                <b>We export to U.S.A, Canada and Europe (Spain).</b>
                </p>
            </Container>
            }
            {active==="Employees" && 
             <Container>
                 <h5>Employees</h5>
                 <p>Apparel division utilizes the potential and skill of female workers as much as possible. With a work force 54% are female & 46% male.</p>
             </Container>
            }
            {active==="Quality Control" && 
            <Container>
            <h5>Quality Control</h5>
            <p>Quality remains the main focus of ASWL, which plays a major role in customer satisfaction. We have achieved this consistently with over 300 skilled and experienced employees in the department that overlooks the standard of the products, from cutting and sewing to the finished products.</p>
            </Container>
            }
            {active===" Computer Aided Design" &&
              <Container>
              <h5>Computer Aided Design</h5>
              <p>CAD based markers are used to facilitate right and economic utilization of fabrics. We have the latest model of GERBER & LECTRA that provides markers for all the units.
                Printing: In order to provide prompt and quick service to sewing lines as well as to maintain the quality, we possessed (Plotter) Pattern-printer named LECTRA Alys 30, RICHPEACE RP-MJ/4 &GERBER Plooter XLP+.
                Pattern Cutter: In order to provide prompt and quick service to cutting pattern as well as to maintain the quality, we possessed Plotter-Cutter named RICHPEACE RP-TM15125.</p>
              </Container>
             }
             {active==="About DMC" &&
              <Container>
              <h5>About DMC</h5>
              <p>DMC Apparels Limited was bought as a small factory and came under the Arunima group in 2004. It was moved to a new building in 2018 and is one of the highly-developed washing plants in the country. Our state-of-the-art machinery not only serves the company itself but also caters to the needs of our customers as well. Additionally, the plant has recently been expanded, now having the capacity to wash 40,000 pieces of garments (20,000 pieces of denim and 20,000 pieces of non-denim garment) each day. An assortment of options for different types of washes is offered in the plant, including:

              </p>
              <ol>
                  <li>Enzyme Wash</li>
                  <li>Pigment Wash</li>
                  <li>PP Spray</li>
                  <li>Bleach Wash</li>
                  <li>Hand Sanding</li>
                  <li>Whisker</li>
                  <li>Stone Wash</li>
                  <li> Snow Wash</li>
                  <li> Tacking</li>
                  <li>Rain Wash</li>
                  <li>Peach Wash</li>
                  <li>Grinding</li>
                  <li>3D Whisker</li>
                  <li>Crinkle</li>
                  <li>Garment Dyeing</li>
                  <li> Tint Wash</li>
                  <li>Silicone Wash</li>
                  <li>3D Crinkle</li>
                  <li>Ultra-Soft Wash</li>
              </ol>
              </Container>
             }
             {active==="Research And Development" && 
             <Container>
                 <h5>Research And Development</h5>
                 <p>Our research and development section allow us to develop a variety of garments, including denim, non-denim, and twill as well as produce bleach and dying chemicals using the 7 machines allocated to each task, curing ovens and 3D hangers. With these types of equipment available to us, along with the sufficient manpower, we are able to fulfil the needs of the customers quickly and efficiently, responding in record time to orders from our buyers.</p>
             </Container>
            }
            {active==="Physical Testing Laboratory" && 
             <Container>
                 <h5>Physical Testing Laboratory</h5>
                 <p>With an artfully designed and modern soft line testing laboratory, the quality of our products consistently remains top-notch. All the machines and equipment are upgraded regularly to maintain high-standards, optimum safety, and integrity. Additionally, more up-to-date machines have been added such as the Titan Universal Strength Tester, the ElmaTear Strength Tester, and the Martindale Abrasion and Pilling Tester among many others are providing the buyers with the option of acquiring all in-house physical lab tests for the products.</p>
             </Container>
            }
            {active==="Quality Assurance Of Wash" && 
             <Container>
                 <h5>Employees</h5>
                 <p>A team is dedicated to ensure the quality, working relentlessly to provide the best and smoothest production for the company.</p>
             </Container>
            }
            {active==="Chemicals with Sustainable" && 
             <Container>
                 <h5>Chemicals with Sustainable Future:Chemical Store</h5>
                 <ul>
                     <li>Safe Chemical Storage</li>
                     <li>Specifically designed for safe storage of hazardous substances</li>
                     <li> A definitive guide and material safety data sheet (MSDS) are attached to all storage containers.</li>
                 </ul>
             </Container>
            }
            {active==="Sustainability" && 
             <Container>
                 <h5>Sustainability:Environment and Climate</h5>
                 <p>While the RMG sector plays a vital role in the economic growth as well as the environmental province of Bangladesh, the washing industry is said to be the biggest offenders of water pollution in the country. However, despite the existence of various washing companies in the country, that are mainly located in Gazipur and Chattagram’s industrial areas, laws imposed by the government has given the opportunities for these companies to refrain from further polluting the environment.<br></br>We, at DMC Apparels Limited, are deeply committed to the protection of the environment. We practice using the Effluent Treatment Plant (ETP) in our washing plants to minimize water and energy consumption and maintain a sustainable environment, such as</p>
                 <ul>
                     <li>Using ecological chemicals</li>
                     <li>Process machines using double outlet system</li>
                     <li>Hot water transport pipeline system</li>
                     <li>Using servo motor, T5 tube light, and inverter system</li>
                     <li>Auto water pump</li>
                     <li>Using large windows on every floor of the factory building to allow the sunlight in</li>
                 </ul>
             </Container>
            }
            {active==="Go Green" && 
             <Container>
                 <h5>Go Green (Factory View)</h5>
                 <p>As sustainable and eco-friendly operations have become a global standard, our company feels compelled to set up green factories as customary for their goal to be equivalent to a world-class corporation.</p>
             </Container>
            }
            {active==="Water Treatment Plant" && 
             <Container>
                 <h5>Water Treatment Plant</h5>
                 <p>To minimize water wastage, we use a well-established Water Treatment Plant (WTP) from the distinguished Winstone Engineering in Singapore. Its capacity is 50,000 litres/hour while their raw water reserve tank capacity reaches 45,000 litres and soft water reserve tank has a capacity of 40,000 litres.<br></br>The WTP is operated by a certified and well-trained operator and is available for production purposes 24 hours a day. Water from the reserve is delivered only as per requirement and the tank undergoes regular, scheduled servicing and regeneration.</p>
             </Container>
            }
            {active==="Power Generation" && 
             <Container>
                 <h5>Power Generation</h5>
                 <p>The Centralized Power Generation Facility is capable of producing the required electricity for all our business units at the station. It currently produces power using both natural gas and diesel fuel, ensuring that all generators are synchronized to enable matching of power output to actual consumption, thus saving costly fuel expenditure.<br></br>This captive powerhouse is well-positioned to meet the future energy demands of the station with a team of qualified professionals that are currently exploring the option of utilizing solar power and cogeneration techniques as part of our green cost-saving goals.</p>
             </Container>
            }
            {active==="Effluent Treatment Plant" && 
             <Container>
                 <h5>Effluent Treatment Plant</h5>
                 <p>At DMC Apparels, we have a 50m3 /hr capacity of bio-chemical ETP (Effluent Treatment Plant). It functions using ion-exchange, guided by proficient engineers. This plant has a rhetorical laboratory, which is supervised by machines of the highest quality. It is used to enhance the quality of water treatment that reduces any effects on the environment.</p>
             </Container>
            }
            {active==="Medical center" && 
             <Container>
                 <h5>Medical center</h5>
                 <p>We have a well-established medical centre that remains open as long as the factory is running for the treatment of employees. Facilities available in the centre includes,</p>
                 <ol>
                     <li>Three doctors (a male and two females)</li>
                     <li>Three medical assistants</li>
                     <li>One nurse</li>
                     <li>Three patient beds</li>
                 </ol>
             </Container>
            }
            {active==="Policies" && 
             <Container>
                 <h5>Policies</h5>
                 <p>DMC Apparels Limited believes in the quality of products. Keeping that in mind, the company’s first and foremost policy is to ensure and maintain customers’ required level of expectation of quality. We believe that time is money, and money is precious; therefore on-time delivery is another unique attribute of Arunima, which sets us apart from our competitors.<br></br>Arunima keenly adapts to the continuing developments in this sector of the industry. We readily welcome the cutting-edge technology of the present and have the thrust for further advancements.<br></br>However, the technology is not all; every man behind the machine plays a vital role in the making of the company. To develop their skills, the group holds regular, internal training program, maintaining a good working environment through a well-organized HRD.</p>
             </Container>
            }
            {active==="Factory Space2" && 
             <Container>
                 <h5>Factory Space</h5>
                 <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Area</th>
                    <th>Space</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Factory Land Area</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Total Land Area Occupied</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Building Space (9 Stories)</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Tin Shed Store</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Dining Room	</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Boiler Room	</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Generator Room	</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Jut & G/Room Medical & Daycare	</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Compressor Room	</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>2 Steel Stair	</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Lubricant Room	</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Fire Command, Pump House & Office Room	</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>4 Storied Utility Building(650 sqft per floor)</td>
                    <td>000 Sqft</td>
                    </tr>
                </tbody>
                </Table>
             </Container>
            }
            {active==="Capacity2" && 
             <Container>
                 <h5>Capacity</h5>
                 <Card body className="mb-3 text-center ">Annual Turn Over 2017-18</Card>
                <Table striped bordered hover className="shadow bg-body rounded">
                <thead>
                    <tr>
                    <th>Category</th>
                    <th>Quantity</th>
                   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Non-Denim</td>
                    <td>30,000 Pcs</td>
                    
                    </tr>
                    <tr>
                    <td>High End Denim</td>
                    <td>20,000 Pcs</td>
                    
                    </tr>
                    <tr>
                    <td>Total</td>
                    <td >50,000 Pcs</td>
                   
                    </tr>
                </tbody>
                </Table>
                <Card body className="text-center">USD 42.00 Million</Card>
             </Container>
            }
             {active==="Machineries List" && 
             <Container>
                 <h5>Machineries List</h5>
                 <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Serial</th>
                    <th>Machineries</th>
                   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>a</td>
                    
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>b</td>
                    
                    </tr>
                    <tr>
                    <td>3</td>
                    <td >c</td>
                   
                    </tr>
                    <tr>
                    <td>4</td>
                    <td >d</td>
                   
                    </tr>
                    <tr>
                    <td>5</td>
                    <td >e</td>
                   
                    </tr>
                    <tr>
                    <td>6</td>
                    <td >f</td>
                   
                    </tr>
                    <tr>
                    <td>7</td>
                    <td >g</td>
                   
                    </tr>
                    <tr>
                    <td>8</td>
                    <td >h</td>
                   
                    </tr>
                    <tr>
                    <td>9</td>
                    <td >i</td>
                   
                    </tr>
                    <tr>
                    <td>10</td>
                    <td >j</td>
                   
                    </tr>
                    <tr>
                    <td>11</td>
                    <td >k</td>
                   
                    </tr>
                    <tr>
                    <td>12</td>
                    <td >l</td>
                   
                    </tr>
                    <tr>
                    <td>13</td>
                    <td >m</td>
                   
                    </tr>
                    <tr>
                    <td>14</td>
                    <td >n</td>
                   
                    </tr>
                    <tr>
                    <td>15</td>
                    <td >o</td>
                   
                    </tr>
                    
                </tbody>
                </Table>
             </Container>
            }
            {active==="About A.Q.N" && 
             <Container>
                 <h5>About A.Q.N</h5>
                 <p>AQN Business Associates Ltd. is a sister concern of Arunima Group. We are an export-oriented, multicolour poly bag factory situated at Zirabo, Savar. The company initiated about fourteen years ago with a little machinery but now is equipped fully to meet demands in the garment and polybag industry. With a progressive and professional management team and an employee-friendly program, we are fully set up to run production, marketing, and commercial operations. Factory premises are kept well-lit and ventilated with industrial level safety measures, as described in the local regulatory laws. The factory is manned by a team of brilliant technologists, operators, supervisors and, of course, a devoted loyal workforce. It is also in our company’s strictly established policy to prohibit child labour no matter what the cost. Products.</p>
                 <ol>
                     <li>Polypropylene (PP) plain and multi-colour, printed polybags</li>
                     <li>Low-density polyethylene (L.D.P.E) plain and multi-colour, printed polybags</li>
                     <li>Linear low-density polyethylene (L.D.P.E) plain and multi-colour, printed polybags</li>
                     <li>BOPP plain and printed polybags</li>
                     <li>Pillow polybags</li>
                     <li> Outdoor pillow polybags</li>
                     <li>Flap with adhesive polybags</li>
                     <li>Pillow with gusset polybags</li>
                     <li>Flap with gusset adhesive polybags</li>
                     <li>Round hanger cutting polybags</li>
                     <li>Straight hanger cutting polybags</li>
                     <li>Bottom seal cutting polybags</li>
                     <li>Blister polybags</li>
                     <li>Folding polybags</li>
                     <li>PVC hook hanger polybags</li>
                 </ol>
             </Container>
            }
            {active==="Factory Space3" && 
             <Container>
                 <h5>Factory Space</h5>
                 <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Area</th>
                    <th>Space</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Factory Land Area</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Total Land Area Occupied</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Building Space (9 Stories)</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Tin Shed Store</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Dining Room	</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Boiler Room	</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Generator Room	</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Jut & G/Room Medical & Daycare	</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Compressor Room	</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>2 Steel Stair	</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Lubricant Room	</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>Fire Command, Pump House & Office Room	</td>
                    <td>000 Sqft</td>
                    </tr>

                    <tr>
                    <td>4 Storied Utility Building(650 sqft per floor)</td>
                    <td>000 Sqft</td>
                    </tr>
                </tbody>
                </Table>
             </Container>
            }
            {active==="Products" && 
             <Container>
                 <h5>Products</h5>
                 <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Serial</th>
                    <th>Products</th>
                   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Poly Propylene (PP) Plain & Multi Color Printed Poly Bag</td>
                    
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Low Density Polyethylene (L.D.P.E) Plain & Multi Color Printed Poly Bag</td>
                    
                    </tr>
                    <tr>
                    <td>3</td>
                    <td >Liner Low Density Poly Ethylene Plain & Multi Color Printed Poly Bag</td>
                   
                    </tr>
                    <tr>
                    <td>4</td>
                    <td >BOPP Plain & Printed Poly Bag</td>
                   
                    </tr>
                    <tr>
                    <td>5</td>
                    <td >Pillow Poly Bag</td>
                   
                    </tr>
                    <tr>
                    <td>6</td>
                    <td >Out Side Pillow Poly Bag</td>
                   
                    </tr>
                    <tr>
                    <td>7</td>
                    <td >Flap With Adhesive Poly Bag</td>
                   
                    </tr>
                    <tr>
                    <td>8</td>
                    <td >Pillow With Gasset Poly Bag</td>
                   
                    </tr>
                    <tr>
                    <td>9</td>
                    <td >Flap With Gasset Adhesive Poly Bag</td>
                   
                    </tr>
                    <tr>
                    <td>10</td>
                    <td >Round Hanger Cutting Poly Bag</td>
                   
                    </tr>
                    <tr>
                    <td>11</td>
                    <td >Straight Hanger Cutting Poly Bag</td>
                   
                    </tr>
                    <tr>
                    <td>12</td>
                    <td >Bottom Seal Cutting Poly Bag</td>
                   
                    </tr>
                    <tr>
                    <td>13</td>
                    <td >Blister Poly Bag</td>
                   
                    </tr>
                    <tr>
                    <td>14</td>
                    <td >Folding Poly Bag</td>
                   
                    </tr>
                    <tr>
                    <td>15</td>
                    <td >PVC Hook Hanger Poly Bag</td>
                   
                    </tr>
                    
                </tbody>
                </Table>
             </Container>
            }
            {active==="Machineries List2" && 
             <Container>
                 <h5>Machineries List</h5>
                 <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Serial</th>
                    <th>Machineries</th>
                   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>PR Blowing Machine Quantity - 1</td>
                    
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>PR Blowing Machine Quantity - 1</td>
                    
                    </tr>
                    <tr>
                    <td>3</td>
                    <td >LOPE Blowing Machine Quantity - 3</td>
                   
                    </tr>
                    <tr>
                    <td>4</td>
                    <td >Side Sealing Machine (Taiwan (China), Quantity - 2</td>
                   
                    </tr>
                    <tr>
                    <td>5</td>
                    <td >Bottom Cutting Machine, Quantity - 1</td>
                   
                    </tr>
                    <tr>
                    <td>6</td>
                    <td >Flexo Printing Machine, Quantity - 1</td>
                   </tr>
                    
                </tbody>
                </Table>
                 
             </Container>
            }
            {active==="Employee" && 
             <Container>
                 <h5>Employee</h5>
                 <ul>
                     <li>All Workers/Employee Are Given Identity Card, A Booklet on Regulator Laws/Rights And Individual Service Record Books.</li>
                     <li>Management Ensured Minimum Wages and Benefits as Per Local Regulatory Laws and Pay Slips Showing Detail Break Down of their Entitlements.</li>
                     <li>Environment Friendly Working Conditions in All Floors as Per Local Regulatory Laws.</li>
                     <li>Medical Bills Paid in Case of Accidents & Hospitalization.</li>
                     <li>Floors Are Equipped With Adequate First Aid Boxes, Fire Extinguishers, Water Hydrants, Safe Drinking Water Stations and Spittoons.</li>
                     <li>An Area Is Marked for Care Facilities in Case Of Emergency.</li>
                     <li>Two Festival Bonuses Given Upon Completion of 6 Months Service.</li>
                     <li>Holiday Allowances Given to Employees Working on Holidays.</li>
                     <li>All Worker/Employees Trained in Fire Evacuation.</li>
                     <li> Factory Is Totally Non Smoking Zone.</li>
                     
                 </ul>
             </Container>
            }
            {active==="Contact Of A.Q.N" && 
             <Container>
                 <h5>Contact Of A.Q.N</h5>
                 <p><b>Office/ Factory:</b> <br></br> 1242, East Monipur, Begum Rokeya Sorani, Mirpur, Dhaka-1216.<br></br> Tel: 88-02-55073504, 9034870<br></br>  E-Mail:- info@aqnpoly.com, aqn@thenetheads.com,<br></br>Website: www.aqnpoly.com<br></br><b>Factory:</b><br></br>1242, East Monipur, Begum Rokeya Sorani, Mirpur, Dhaka-1216. Tel.9025834<br></br><b>Contact Person:</b><ol><li>Sk. Abidur Rahman, Managing Director</li><li>Md. Roquibul Islam, Executive Director, Cell: 01726695532</li><li>Md. Zafor Uddin, Senior Commercial Officer, Cell: 01818364163</li></ol> </p>
             </Container>
            }
        </Container>
     );
};

export default DivComponent;
