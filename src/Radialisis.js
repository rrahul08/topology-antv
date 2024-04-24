import React, { useEffect, useRef, useState } from 'react';
import G6 from '@antv/g6';

import 'react-dropdown/style.css';



const Radialisis = () => {
  const containerRef = useRef(null);
  const [graphInstance, setGraphInstance] = useState(null); // State to hold the G6 graph instance
//   const [selectedOption, setSelectedOption] = useState(defaultOption);


  useEffect(() => {
    if (!containerRef.current) return;



    const data = JSON.parse(`[
      {
          "lsp_id": "TVF-D1002-AMS-001.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-001.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-D1002-AMS-002.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-003.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-004.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-CSR1000-AMS-001.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-002.00",
                  "metric": "16777214"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-001.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-CSR1000-AMS-002.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-003.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-004.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-D1001-AMS-005.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-001.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9102-AMS-002.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-D1002-AMS-001.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-CSR1000-AMS-001.00",
                  "metric": "16777214"
              },
              {
                  "neighbor_id": "TVF-D1001-AMS-005.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9006-AH-001.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-CCRS1-AMS-200.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "TVF-D1002-AMS-005.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-001.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "TVF-C9001-MT-001.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9001-AMS-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9006-AMS-001.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9102-AMS-003.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-D1002-AMS-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-CSR1000-AMS-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-004.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "TVF-D1006-AMS-004.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9901-AMS-001.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-CCRS1-UT-200.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "TVF-C9001-HM-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-D1002-AMS-004.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-D1002-AMS-006.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9006-AMS-003.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9901-AMS-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9006-AMS-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9001-AMS-003.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9102-AMS-004.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-D1002-AMS-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-CSR1000-AMS-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-003.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "TVF-C9006-AH-001.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-CCRS1-AMS-200.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "TVF-D1002-AMS-004.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-D1002-AMS-006.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9001-MT-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9006-AMS-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9001-AMS-003.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9006-AH-001.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-004.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-D1006-AMS-004.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-003.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-001.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-D1004-AH-001.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-D1004-AH-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9910-AH-001.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-D1004-AH-002.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-D1004-AH-001.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9910-AH-002.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-D1006-EHV-001.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-D1006-EHV-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9910-EHV-001.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-D1006-EHV-002.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-D1006-EHV-001.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9910-EHV-002.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9901-AMS-001.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-003.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-001.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "nls-ams02a-rt2.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "63"
              }
          ]
      },
      {
          "lsp_id": "TVF-CCRS1-AMS-200.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-004.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-D1004-AMS-231.00",
                  "metric": "4000"
              },
              {
                  "neighbor_id": "TVF-D1001-AMS-001.00",
                  "metric": "4000"
              },
              {
                  "neighbor_id": "TVF-D1001-AMS-002.00",
                  "metric": "4000"
              },
              {
                  "neighbor_id": "TVF-D1004-UT-231.00",
                  "metric": "4000"
              },
              {
                  "neighbor_id": "TVF-D1001-UT-002.00",
                  "metric": "4000"
              },
              {
                  "neighbor_id": "TVF-D1002-HRL-001.00",
                  "metric": "4000"
              }
          ]
      },
      {
          "lsp_id": "TVF-D1004-AMS-231.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-CCRS1-AMS-200.00",
                  "metric": "4000"
              }
          ]
      },
      {
          "lsp_id": "TVF-D1001-AMS-001.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-CCRS1-AMS-200.00",
                  "metric": "4000"
              }
          ]
      },
      {
          "lsp_id": "TVF-D1001-AMS-002.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-CCRS1-AMS-200.00",
                  "metric": "4000"
              },
              {
                  "neighbor_id": "TVF-CCRS1-UT-200.00",
                  "metric": "4000"
              }
          ]
      },
      {
          "lsp_id": "TVF-CCRS1-UT-200.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-003.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-D1001-AMS-002.00",
                  "metric": "4000"
              },
              {
                  "neighbor_id": "TVF-D1004-UT-231.00",
                  "metric": "4000"
              },
              {
                  "neighbor_id": "TVF-D1001-UT-001.00",
                  "metric": "4000"
              },
              {
                  "neighbor_id": "TVF-D1001-UT-002.00",
                  "metric": "4000"
              },
              {
                  "neighbor_id": "TVF-D1002-HRL-001.00",
                  "metric": "4000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-001.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-D1004-UT-231.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-CCRS1-AMS-200.00",
                  "metric": "4000"
              },
              {
                  "neighbor_id": "TVF-CCRS1-UT-200.00",
                  "metric": "4000"
              }
          ]
      },
      {
          "lsp_id": "TVF-D1001-UT-001.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-CCRS1-UT-200.00",
                  "metric": "4000"
              }
          ]
      },
      {
          "lsp_id": "TVF-D1001-UT-002.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-CCRS1-AMS-200.00",
                  "metric": "4000"
              },
              {
                  "neighbor_id": "TVF-CCRS1-UT-200.00",
                  "metric": "4000"
              }
          ]
      },
      {
          "lsp_id": "TVF-D1002-HRL-001.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-CCRS1-AMS-200.00",
                  "metric": "4000"
              },
              {
                  "neighbor_id": "TVF-CCRS1-UT-200.00",
                  "metric": "4000"
              }
          ]
      },
      {
          "lsp_id": "ams-dc0001-gr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-002.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-003.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "100"
              },
              {
                  "neighbor_id": "NLSPL1PE01.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-dc0001-dr109.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9910-AH-001.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "TVF-C9910-EHV-001.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "slr-tr0004-gr103-new.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-dc0001-dr149.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-ams17b-rt1.00",
                  "metric": "1000"
              }
          ]
      },
      {
          "lsp_id": "ams-dc0001-gr101.00-01",
          "isis_neighbors": [
              {
                  "neighbor_id": "nls-hlm01a-ra60.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "zp-dc0100-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ehv-dc0002-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-dc0001-gr103-new.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "nls-ams02e-ra60.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr103.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "hm-dc0100-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "rt-dc0172-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "lls-dc0100-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "hrv-dc0100-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "nm-dc0100-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "nls-mnd01a-ra60.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "rt-dc0173-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "nls-tbg01a-ra60.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "re0-ams-tr0042-dr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "asn-dc0002-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "dv-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "tb-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "weer-dc0002-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "vnn-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "mnd-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "gv-dc0010-gr101.00",
                  "metric": "1000"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0021-gr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-004.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "nls-ams02a-rt2.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "100"
              },
              {
                  "neighbor_id": "ams-tr0021-dr109.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9910-AH-002.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "slr-tr0004-gr104-new.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr104-new.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "nls-ams02e-ra50.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "nls-mnd01a-ra50.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "re0-ams-tr0610-dr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "hvs-dc0001-gr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "gv-dc0052-gr102.00",
                  "metric": "1000"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0021-gr101.00-01",
          "isis_neighbors": [
              {
                  "neighbor_id": "NLSPL1PE02.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "TVF-C9910-EHV-002.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-tr0021-dr149.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-hlm01a-ra50.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "zp-dc0100-gr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr104.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "hm-dc0100-gr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "rt-dc0172-gr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "lls-dc0100-gr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "hrv-dc0100-gr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "nm-dc0100-gr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "rt-dc0173-gr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "nls-tbg01a-ra50.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "gn-dc0002-gr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "zl-dc0001-gr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ht-dc0001-gr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "venls-dc0003-gr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "amr-dc0010-gr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-001.00",
                  "metric": "1000"
              }
          ]
      },
      {
          "lsp_id": "NLSPL1PE01.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "NLSPL1PE02.00",
                  "metric": "1000"
              }
          ]
      },
      {
          "lsp_id": "NLSPL1PE02.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "NLSPL1PE01.00",
                  "metric": "1000"
              }
          ]
      },
      {
          "lsp_id": "ams-dc0001-dr109.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-dr109.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "ams-dc0001-dr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-dc0001-rr101.00",
                  "metric": "1500"
              },
              {
                  "neighbor_id": "ams-dc0001-rr102.00",
                  "metric": "1500"
              },
              {
                  "neighbor_id": "ams-dc0001-rr103.00",
                  "metric": "1500"
              },
              {
                  "neighbor_id": "ams-dc0001-rr104.00",
                  "metric": "1500"
              },
              {
                  "neighbor_id": "ams-dc0001-rr107.00",
                  "metric": "1500"
              },
              {
                  "neighbor_id": "ams-tr0021-rr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-rr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-rr103.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-rr104.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-rr107.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0021-dr109.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-dc0001-dr109.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "ams-dc0001-rr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-dc0001-rr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-dc0001-rr103.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-dc0001-rr104.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-dc0001-rr107.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-rr101.00",
                  "metric": "1500"
              },
              {
                  "neighbor_id": "ams-tr0021-rr102.00",
                  "metric": "1500"
              },
              {
                  "neighbor_id": "ams-tr0021-rr103.00",
                  "metric": "1500"
              },
              {
                  "neighbor_id": "ams-tr0021-rr104.00",
                  "metric": "1500"
              },
              {
                  "neighbor_id": "ams-tr0021-rr107.00",
                  "metric": "1500"
              }
          ]
      },
      {
          "lsp_id": "ams-dc0001-dr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-dr109.00",
                  "metric": "1000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9910-AH-001.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-D1004-AH-001.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "TVF-C9910-AH-002.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "AH-TR0009-DR101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9910-AH-002.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-D1004-AH-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "TVF-C9910-AH-001.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "HTN-S03555-CR104.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "AH-TR0009-DR102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9910-EHV-001.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-D1006-EHV-001.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "TVF-C9910-EHV-002.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "HTN-S03555-CR103.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "EHV-TR0001-DR101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9910-EHV-002.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-D1006-EHV-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "TVF-C9910-EHV-001.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "EHV-TR0001-DR102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "tb-dc0001-dr171.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "tb-dc0001-dr172.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "tb-dc0001-gr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "tb-dc0001-dr172.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "tb-dc0001-dr171.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "ht-dc0001-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "hm-dc0100-dr301.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nls-hlm01a-ra50.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-hlm01a-ra60.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "hm-dc0100-dr302.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nls-hlm01a-ra50.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-hlm01a-ra60.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "hm-dc0100-dr303.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nls-hlm01a-ra50.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-hlm01a-ra60.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "hm-dc0100-dr304.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nls-hlm01a-ra50.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-hlm01a-ra60.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "tb-dc0001-dr301.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nls-tbg01a-ra50.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-tbg01a-ra60.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "tb-dc0001-dr302.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nls-tbg01a-ra50.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-tbg01a-ra60.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "tb-dc0001-dr303.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nls-tbg01a-ra50.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-tbg01a-ra60.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "tb-dc0001-dr304.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nls-tbg01a-ra50.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-tbg01a-ra60.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "tb-dc0001-dr305.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nls-tbg01a-ra50.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-tbg01a-ra60.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "tb-dc0001-dr306.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nls-tbg01a-ra50.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-tbg01a-ra60.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "tb-dc0001-dr307.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nls-tbg01a-ra50.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-tbg01a-ra60.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "tb-dc0001-dr308.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nls-tbg01a-ra50.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-tbg01a-ra60.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "rt-dc0173-dr301.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "rt-dc0173-gr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "rt-dc0173-gr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "rt-dc0173-dr302.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "rt-dc0173-gr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "rt-dc0173-gr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "slr-tr0004-gr103-new.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "slr-tr0004-gr104-new.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "slr-tr0004-dr371.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "SLR-TR0004-DR101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "slr-tr0004-gr303.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "slr-tr0004-gr104-new.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "slr-tr0004-gr103-new.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "slr-tr0004-dr372.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "SLR-TR0004-DR102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "slr-tr0004-gr304.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "slr-tr0004-dr371.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "slr-tr0004-gr103-new.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "slr-tr0004-dr372.00",
                  "metric": "200"
              }
          ]
      },
      {
          "lsp_id": "slr-tr0004-dr372.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "slr-tr0004-gr104-new.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "slr-tr0004-dr371.00",
                  "metric": "200"
              }
          ]
      },
      {
          "lsp_id": "AMS-TR0021-DR107.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr104.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "ams-tr0021-gr103.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "RT-RC0173-DR107.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "rt-dc0173-gr102.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "rt-dc0173-gr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "HTN-S03555-CR103.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9910-EHV-001.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "HTN-S03555-CR103.01",
                  "metric": "10000"
              }
          ]
      },
      {
          "lsp_id": "HTN-S03555-CR103.01-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "HTN-S03555-CR103.00",
                  "metric": "0"
              },
              {
                  "neighbor_id": "HTN-S03555-CR104.00",
                  "metric": "0"
              }
          ]
      },
      {
          "lsp_id": "HTN-S03555-CR104.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9910-AH-002.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "HTN-S03555-CR103.01",
                  "metric": "10000"
              }
          ]
      },
      {
          "lsp_id": "AMS-TR0021-DR103.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr104-new.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr103.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0006-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr103-new.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr104-new.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0409-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr103-new.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr104-new.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0610-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr103-new.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr104-new.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0042-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr103-new.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr104-new.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "SLR-TR0004-DR101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "slr-tr0004-gr103-new.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "SLR-TR0004-DR102.00",
                  "metric": "400"
              }
          ]
      },
      {
          "lsp_id": "SLR-TR0004-DR102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "slr-tr0004-gr104-new.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "SLR-TR0004-DR101.00",
                  "metric": "400"
              }
          ]
      },
      {
          "lsp_id": "AH-TR0009-DR101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9910-AH-001.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "AH-TR0009-DR102.00",
                  "metric": "400"
              }
          ]
      },
      {
          "lsp_id": "AH-TR0009-DR102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9910-AH-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "AH-TR0009-DR101.00",
                  "metric": "400"
              }
          ]
      },
      {
          "lsp_id": "EHV-TR0001-DR101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9910-EHV-001.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "EHV-TR0001-DR102.00",
                  "metric": "400"
              }
          ]
      },
      {
          "lsp_id": "EHV-TR0001-DR102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9910-EHV-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "EHV-TR0001-DR101.00",
                  "metric": "200"
              }
          ]
      },
      {
          "lsp_id": "ams-dc0001-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr103-new.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-dr102.00",
                  "metric": "400"
              }
          ]
      },
      {
          "lsp_id": "slr-tr0004-gr303.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "slr-tr0004-gr103-new.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "slr-tr0004-gr304.00",
                  "metric": "2200"
              }
          ]
      },
      {
          "lsp_id": "slr-tr0004-gr304.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "slr-tr0004-gr104-new.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "slr-tr0004-gr303.00",
                  "metric": "2200"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0021-gr303.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr304.00",
                  "metric": "2200"
              },
              {
                  "neighbor_id": "nls-ams02e-ra50.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0021-gr304.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr303.00",
                  "metric": "2200"
              },
              {
                  "neighbor_id": "nls-ams02e-ra60.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "tb-dc0001-gr303.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "tb-dc0001-gr304.00",
                  "metric": "2200"
              },
              {
                  "neighbor_id": "nls-tbg01a-ra50.00",
                  "metric": "1999"
              }
          ]
      },
      {
          "lsp_id": "tb-dc0001-gr304.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "tb-dc0001-gr303.00",
                  "metric": "2200"
              },
              {
                  "neighbor_id": "nls-tbg01a-ra60.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ams-dc0001-rr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-dr109.00",
                  "metric": "1500"
              },
              {
                  "neighbor_id": "ams-tr0021-dr109.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ams-dc0001-rr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-dr109.00",
                  "metric": "1500"
              },
              {
                  "neighbor_id": "ams-tr0021-dr109.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ams-dc0001-rr103.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-dr109.00",
                  "metric": "1500"
              },
              {
                  "neighbor_id": "ams-tr0021-dr109.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ams-dc0001-rr104.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-dr109.00",
                  "metric": "1500"
              },
              {
                  "neighbor_id": "ams-tr0021-dr109.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ams-dc0001-rr107.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-dr109.00",
                  "metric": "1500"
              },
              {
                  "neighbor_id": "ams-tr0021-dr109.00",
                  "metric": "1600"
              }
          ]
      },
      {
          "lsp_id": "mnd-dc0002-dr171.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "mnd-dc0002-dr172.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "mnd-dc0001-gr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "mnd-dc0002-dr172.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "mnd-dc0002-dr171.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "hvs-dc0001-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ams-dc0001-dr149.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-dr149.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0021-dr149.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-dc0001-dr149.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0021-rr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-dr109.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-dr109.00",
                  "metric": "1500"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0021-rr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-dr109.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-dr109.00",
                  "metric": "1500"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0021-rr103.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-dr109.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-dr109.00",
                  "metric": "1500"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0021-rr104.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-dr109.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-dr109.00",
                  "metric": "1500"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0021-rr107.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-dr109.00",
                  "metric": "1500"
              },
              {
                  "neighbor_id": "ams-tr0021-dr109.00",
                  "metric": "1600"
              }
          ]
      },
      {
          "lsp_id": "HM-RC0100-DR105.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "HM-RC0100-DR106.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "hm-dc0100-gr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "HM-RC0100-DR106.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "HM-RC0100-DR105.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "hm-dc0100-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "RT-RC0173-DR105.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "RT-RC0173-DR106.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "rt-dc0173-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "RT-RC0173-DR106.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "RT-RC0173-DR105.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "rt-dc0173-gr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "nls-mnd01a-ra2.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nls-mnd01a-ra60.00",
                  "metric": "327691"
              }
          ]
      },
      {
          "lsp_id": "nls-hlm01a-ra50.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "hm-dc0100-dr301.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "hm-dc0100-dr302.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "hm-dc0100-dr303.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "hm-dc0100-dr304.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-hlm01a-ra60.00",
                  "metric": "200"
              }
          ]
      },
      {
          "lsp_id": "nls-hlm01a-ra60.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "hm-dc0100-dr301.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "hm-dc0100-dr302.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "hm-dc0100-dr303.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "hm-dc0100-dr304.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-hlm01a-ra50.00",
                  "metric": "200"
              }
          ]
      },
      {
          "lsp_id": "nls-ams02a-rb3.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nls-ams02a-rb4.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "ams-tr0021-gr104.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "nls-ams02a-rb4.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nls-ams02a-rb3.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "ams-tr0021-gr103.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "zp-dc0100-gr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "zp-dc0100-gr102.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "nls-zut01a-rb1.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nls-zut01a-rb2.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "zp-dc0100-dr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "zp-dc0100-gr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "zp-dc0100-gr101.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "nls-zut01a-rb1.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nls-zut01a-rb2.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "zp-dc0100-dr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ehv-dc0002-gr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "hm-dc0100-gr102.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "ehv-dc0002-dr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ams-dc0001-gr103-new.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-tr0006-dr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-tr0409-dr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-tr0610-dr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-tr0042-dr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-dc0001-dr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr104-new.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "ams-tr0410-dr106.00",
                  "metric": "1000"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0021-gr104-new.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "AMS-TR0021-DR103.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-tr0006-dr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-tr0409-dr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-tr0610-dr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-tr0042-dr102.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-dc0001-gr103-new.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "ams-tr0410-dr106.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-tr0021-dr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "nls-ams02e-ra50.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr303.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-ams02e-ra60.00",
                  "metric": "200"
              }
          ]
      },
      {
          "lsp_id": "nls-ams02e-ra60.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr304.00",
                  "metric": "301000"
              },
              {
                  "neighbor_id": "nls-ams02e-ra50.00",
                  "metric": "200"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0021-gr104.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "AMS-TR0021-DR107.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-ams02a-rb3.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr103.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "nls-ams02a-rb1.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nls-ams02a-rb2.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0021-gr103.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "AMS-TR0021-DR107.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "AMS-TR0021-DR103.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-ams02a-rb4.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr104.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "nls-ams02a-rb1.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nls-ams02a-rb2.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "hm-dc0100-gr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "HM-RC0100-DR106.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "ehv-dc0002-gr101.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "hm-dc0100-gr101.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "nls-hlm01a-rb1.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nls-hlm01a-rb2.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "hm-dc0100-dr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "hm-dc0100-dr104.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "hm-dc0100-gr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "HM-RC0100-DR105.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "hm-dc0100-gr102.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "nls-hlm01a-rb1.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nls-hlm01a-rb2.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "hm-dc0100-dr103.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "rt-dc0172-gr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "rt-dc0172-gr101.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "nls-rtm02a-rb1.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nls-rtm02a-rb2.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "rt-dc0172-gr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "rt-dc0172-gr102.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "nls-rtm02a-rb1.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nls-rtm02a-rb2.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "rt-lc0100-dr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "lls-dc0100-gr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "lls-dc0100-gr101.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "nls-ley01a-rb1.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nls-ley01a-rb2.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "lls-dc0100-dr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "lls-dc0100-gr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "lls-dc0100-gr102.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "nls-ley01a-rb1.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nls-ley01a-rb2.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "lls-dc0100-dr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "hrv-dc0100-gr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "hrv-dc0100-gr101.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "nls-hrv01a-rb1.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nls-hrv01a-rb2.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "hrv-dc0100-gr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "hrv-dc0100-gr102.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "nls-hrv01a-rb1.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nls-hrv01a-rb2.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "nm-dc0100-gr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "nm-dc0100-gr101.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "nls-nij01a-rb1.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nls-nij01a-rb2.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nm-dc0100-dr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "nm-dc0100-gr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "nm-dc0100-gr102.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "nls-nij01a-rb1.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nls-nij01a-rb2.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nm-dc0100-dr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "nls-hlm01a-rb1.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "hm-dc0100-gr102.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "hm-dc0100-gr101.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "nls-hlm01a-rb2.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "hm-dc0100-gr102.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "hm-dc0100-gr101.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "nls-ams17b-rt1.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "63"
              }
          ]
      },
      {
          "lsp_id": "nls-ams02a-rb1.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr104.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr103.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "nls-ams02a-rb2.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr104.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr103.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "nls-rtm02a-rb1.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "rt-dc0172-gr102.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "rt-dc0172-gr101.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "nls-rtm02a-rb2.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "rt-dc0172-gr102.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "rt-dc0172-gr101.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "nls-rtm03a-rb1.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "rt-dc0173-gr102.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "rt-dc0173-gr101.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "nls-rtm03a-rb2.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "rt-dc0173-gr102.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "rt-dc0173-gr101.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "nls-ley01a-rb1.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "lls-dc0100-gr102.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "lls-dc0100-gr101.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "nls-ley01a-rb2.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "lls-dc0100-gr102.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "lls-dc0100-gr101.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "nls-hrv01a-rb1.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "hrv-dc0100-gr102.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "hrv-dc0100-gr101.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "nls-hrv01a-rb2.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "hrv-dc0100-gr102.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "hrv-dc0100-gr101.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "nls-zut01a-rb1.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "zp-dc0100-gr101.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "zp-dc0100-gr102.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "nls-zut01a-rb2.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "zp-dc0100-gr101.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "zp-dc0100-gr102.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "nls-nij01a-rb1.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nm-dc0100-gr102.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nm-dc0100-gr101.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "nls-nij01a-rb2.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nm-dc0100-gr102.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nm-dc0100-gr101.00",
                  "metric": "5000"
              }
          ]
      },
      {
          "lsp_id": "nls-mnd01a-ra50.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "nls-mnd01a-ra60.00",
                  "metric": "200"
              }
          ]
      },
      {
          "lsp_id": "nls-mnd01a-ra60.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "nls-mnd01a-ra2.00",
                  "metric": "327691"
              },
              {
                  "neighbor_id": "nls-mnd01a-ra50.00",
                  "metric": "200"
              }
          ]
      },
      {
          "lsp_id": "rt-dc0173-gr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "rt-dc0173-dr301.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "rt-dc0173-dr302.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "RT-RC0173-DR107.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "RT-RC0173-DR105.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nls-rtm03a-rb1.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nls-rtm03a-rb2.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "rt-dc0173-gr101.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "rt-dc0173-dr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "rt-dc0173-gr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "rt-dc0173-dr301.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "rt-dc0173-dr302.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "RT-RC0173-DR107.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "RT-RC0173-DR106.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nls-rtm03a-rb1.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "nls-rtm03a-rb2.00",
                  "metric": "5000"
              },
              {
                  "neighbor_id": "rt-dc0173-gr102.00",
                  "metric": "200"
              }
          ]
      },
      {
          "lsp_id": "nls-tbg01a-ra50.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr301.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr302.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr303.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr304.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr305.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr306.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr307.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr308.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "tb-dc0001-gr303.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-tbg01a-ra60.00",
                  "metric": "200"
              }
          ]
      },
      {
          "lsp_id": "nls-tbg01a-ra60.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr301.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr302.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr303.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr304.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr305.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr306.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr307.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr308.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "tb-dc0001-gr304.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nls-tbg01a-ra50.00",
                  "metric": "200"
              }
          ]
      },
      {
          "lsp_id": "rt-lc0100-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "rt-dc0172-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "rt-dc0173-dr102.00",
                  "metric": "400"
              }
          ]
      },
      {
          "lsp_id": "rt-dc0173-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "rt-dc0173-gr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "rt-lc0100-dr102.00",
                  "metric": "200"
              }
          ]
      },
      {
          "lsp_id": "zp-dc0100-dr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "zp-dc0100-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "zp-dc0100-dr102.00",
                  "metric": "400"
              }
          ]
      },
      {
          "lsp_id": "zp-dc0100-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "zp-dc0100-gr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "zp-dc0100-dr101.00",
                  "metric": "400"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0410-dr106.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr103-new.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr104-new.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ams-tr0021-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-dr102.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "ams-tr0021-gr104-new.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "lls-dc0100-dr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "lls-dc0100-gr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "lls-dc0100-dr102.00",
                  "metric": "400"
              }
          ]
      },
      {
          "lsp_id": "lls-dc0100-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "lls-dc0100-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "lls-dc0100-dr101.00",
                  "metric": "400"
              }
          ]
      },
      {
          "lsp_id": "hm-dc0100-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "hm-dc0100-gr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "hm-dc0100-dr103.00",
                  "metric": "400"
              }
          ]
      },
      {
          "lsp_id": "ehv-dc0002-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ehv-dc0002-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "hm-dc0100-dr104.00",
                  "metric": "400"
              }
          ]
      },
      {
          "lsp_id": "nm-dc0100-dr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nm-dc0100-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nm-dc0100-dr102.00",
                  "metric": "400"
              }
          ]
      },
      {
          "lsp_id": "nm-dc0100-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "nm-dc0100-gr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "nm-dc0100-dr101.00",
                  "metric": "400"
              }
          ]
      },
      {
          "lsp_id": "hm-dc0100-dr103.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "hm-dc0100-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "hm-dc0100-dr102.00",
                  "metric": "400"
              }
          ]
      },
      {
          "lsp_id": "hm-dc0100-dr104.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "hm-dc0100-gr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ehv-dc0002-dr102.00",
                  "metric": "400"
              }
          ]
      },
      {
          "lsp_id": "weer-dc0002-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "venls-dc0003-dr102.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "weer-dc0002-gr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "venls-dc0003-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "weer-dc0002-dr102.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "venls-dc0003-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "asn-dc0002-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "gn-dc0002-dr102.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "asn-dc0002-gr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "gn-dc0002-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "asn-dc0002-dr102.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "gn-dc0002-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "gv-dc0010-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "gv-dc0052-dr102.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "gv-dc0010-gr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "gv-dc0052-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "gv-dc0010-dr102.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "gv-dc0052-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "vnn-dc0001-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "amr-dc0010-dr102.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "vnn-dc0001-gr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "amr-dc0010-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "vnn-dc0001-dr102.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "amr-dc0010-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "mnd-dc0001-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "hvs-dc0002-dr102.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "mnd-dc0001-gr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "hvs-dc0002-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "mnd-dc0001-dr102.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "hvs-dc0001-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "dv-dc0001-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "zl-dc0001-dr102.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "dv-dc0001-gr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "zl-dc0001-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "dv-dc0001-dr102.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "zl-dc0001-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "tb-dc0001-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ht-dc0001-dr102.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "tb-dc0001-gr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ht-dc0001-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "tb-dc0001-dr102.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "ht-dc0001-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-mnd-dc0002-gr103.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "re0-mnd-dc0002-gr104.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "mnd-dc0001-gr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-mnd-dc0002-gr104.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "re0-mnd-dc0002-gr103.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "hvs-dc0001-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-tb-dc0001-gr103.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "re0-tb-dc0001-gr104.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "tb-dc0001-gr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-tb-dc0001-gr104.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "re0-tb-dc0001-gr103.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "ht-dc0001-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-ams-tr0610-dr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "re0-ams-tr0042-dr101.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "re0-ams-tr0409-dr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "re0-ams-tr0410-dr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-ams-tr0042-dr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "re0-ams-tr0610-dr101.00",
                  "metric": "400"
              },
              {
                  "neighbor_id": "re0-ams-tr0409-dr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "re0-ams-tr0410-dr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "asn-dc0002-gr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "asn-dc0002-dr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "gn-dc0002-gr102.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "re0-gn-dc0002-dr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "re0-emn-dc0001-dr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "gn-dc0002-gr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "gn-dc0002-dr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "asn-dc0002-gr101.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "re0-gn-dc0002-dr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "re0-emn-dc0001-dr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "dv-dc0001-gr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "dv-dc0001-dr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "zl-dc0001-gr102.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "re0-zl-dc0001-dr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "zl-dc0001-gr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "zl-dc0001-dr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "dv-dc0001-gr101.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "re0-zl-dc0001-dr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "tb-dc0001-gr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr171.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "re0-tb-dc0001-gr103.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ht-dc0001-gr102.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "re0-ht-dc0001-dr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "re0-tb-dc0001-dr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "re0-bd-dc0002-dr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "ht-dc0001-gr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "tb-dc0001-dr172.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ht-dc0001-dr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "re0-tb-dc0001-gr104.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "tb-dc0001-gr101.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "re0-ht-dc0001-dr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "re0-tb-dc0001-dr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "re0-bd-dc0002-dr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "weer-dc0002-gr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "weer-dc0002-dr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "venls-dc0003-gr102.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "re0-ah-tr0002-dr108.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "venls-dc0003-gr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "venls-dc0003-dr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "weer-dc0002-gr101.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "re0-ah-tr0002-dr108.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "vnn-dc0001-gr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "vnn-dc0001-dr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "amr-dc0010-gr102.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "re0-vnn-dc0001-dr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "amr-dc0010-gr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "amr-dc0010-dr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "vnn-dc0001-gr101.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "re0-vnn-dc0001-dr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "mnd-dc0001-gr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "mnd-dc0002-dr171.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "mnd-dc0001-dr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "re0-mnd-dc0002-gr103.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "hvs-dc0001-gr102.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "re0-mnd-dc0001-dr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "hvs-dc0001-gr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "mnd-dc0002-dr172.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "hvs-dc0002-dr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "re0-mnd-dc0002-gr104.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "mnd-dc0001-gr101.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "re0-mnd-dc0001-dr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "gv-dc0010-gr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-dc0001-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "gv-dc0010-dr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "gv-dc0052-gr102.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "re0-gv-dc0010-dr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "re0-rt-tr0006-dr108.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "gv-dc0052-gr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "gv-dc0052-dr102.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "gv-dc0010-gr101.00",
                  "metric": "200"
              },
              {
                  "neighbor_id": "re0-gv-dc0010-dr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "re0-rt-tr0006-dr108.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9001-HM-001.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9001-HM-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-001.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9001-HM-002.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-003.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9001-HM-001.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-D1002-AMS-003.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-001.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-D1002-AMS-004.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-003.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-004.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-D1002-AMS-005.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-001.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-D1002-AMS-006.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-003.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-004.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9102-AMS-001.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-D1002-AMS-001.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-CSR1000-AMS-001.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-D1001-AMS-005.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-002.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "TVF-D1006-AMS-004.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9901-AMS-001.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-CCRS1-UT-200.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ams-tr0021-gr101.00",
                  "metric": "1000"
              },
              {
                  "neighbor_id": "TVF-C9001-HM-001.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-D1002-AMS-003.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-D1002-AMS-005.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9006-AMS-003.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9901-AMS-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9001-AMS-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9006-AMS-001.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9001-MT-001.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9001-MT-002.00",
                  "metric": "4000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9001-MT-002.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-004.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9001-MT-001.00",
                  "metric": "4000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9006-AMS-003.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-003.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-001.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9901-AMS-002.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-003.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-001.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9001-AMS-002.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-001.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9006-AMS-001.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-002.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-001.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9006-AMS-002.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-003.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-004.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "TVF-C9001-AMS-003.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "TVF-C9102-AMS-003.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "TVF-C9102-AMS-004.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-gn-dc0002-dr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "asn-dc0002-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "gn-dc0002-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-ams-tr0409-dr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "re0-ams-tr0610-dr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "re0-ams-tr0042-dr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-ht-dc0001-dr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "tb-dc0001-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ht-dc0001-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-tb-dc0001-dr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "tb-dc0001-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ht-dc0001-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-zl-dc0001-dr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "dv-dc0001-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "zl-dc0001-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-emn-dc0001-dr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "asn-dc0002-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "gn-dc0002-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-ams-tr0410-dr102.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "re0-ams-tr0610-dr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "re0-ams-tr0042-dr101.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-gv-dc0010-dr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "gv-dc0010-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "gv-dc0052-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-ah-tr0002-dr108.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "weer-dc0002-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "venls-dc0003-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-rt-tr0006-dr108.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "gv-dc0010-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "gv-dc0052-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-mnd-dc0001-dr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "mnd-dc0001-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "hvs-dc0001-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-vnn-dc0001-dr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "vnn-dc0001-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "amr-dc0010-gr102.00",
                  "metric": "2000"
              }
          ]
      },
      {
          "lsp_id": "re0-bd-dc0002-dr101.00-00",
          "isis_neighbors": [
              {
                  "neighbor_id": "tb-dc0001-gr101.00",
                  "metric": "2000"
              },
              {
                  "neighbor_id": "ht-dc0001-gr102.00",
                  "metric": "2000"
              }
          ]
      }
  ]`)

  const nodes = {};
  const edges = [];

  data.forEach(item => {
    const { lsp_id, isis_neighbors } = item;
    nodes[lsp_id] = { id: lsp_id, label: lsp_id }; 
    console.log(nodes);
    isis_neighbors.forEach(neighbor => {
      edges.push({ source: lsp_id, target: neighbor.neighbor_id });

      if (!nodes[neighbor.neighbor_id]) {
        nodes[neighbor.neighbor_id] = { id: neighbor.neighbor_id, label: neighbor.neighbor_id };
      }
    });
  });
 

   

    const instance = new G6.Graph({
      container: containerRef.current,
      width: 800,
      height: 600,
      transforms: [
        {
          type: 'transform-v4-data',
          activeLifecycle: ['read'],
        },
      ],
      layout: {
        type: 'radial',
        unitRadius: 140,
        center: [800, 400],
        nodeSpacing: 800,
        circular: true,
        linkDistance: 300,
        preventOverlap: true,
      },
      modes: {
        default: ['drag-canvas', 'zoom-canvas', 'drag-node', 'collapse-expand-tree'],
      },
      defaultNode: {
        size: 50,
        style: {
          fill: '#C6E5FF',
          stroke: '#5B8FF9',
        },
        labelCfg: {
          position: 'bottom',
          style: {
            fill: '#000',
            fontSize: 12,
          },
        },
      },
      defaultEdge: {
        style: {
          stroke: '#000000',
        },
      },
      autoFit: 'view',
    });

    // instance.data(data);
    instance.data({
      nodes: Object.values(nodes),
      edges: edges,
    });
  


    instance.render();


    instance.zoom(0.7);
    setGraphInstance(instance);

    return () => {
      instance.destroy();
    };
  }, []);

  

 

  

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
        <div style={{ width: '10%', marginRight: '70px', marginTop: '30px' }}>
        </div>
      </div>
    </>
  );
};

export default Radialisis;
