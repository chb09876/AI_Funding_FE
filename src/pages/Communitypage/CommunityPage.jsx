import styled from 'styled-components';
import {useState} from 'react';
import Board from './Component/Board';
import Read from './Read';
import Write from './Write';
import { Routes, Route } from 'react-router-dom';

/*

커뮤니티 메인 페이지

*/

export default function CommunityPage(){

    return(
      <StyledCommunityPage className="community_page">
      <Routes>
        <Route path="" element ={ < Board />}></Route>
        <Route path="Read/*" element={<Read />}></Route>
        <Route path="Write" element={<Write />}></Route>
      </Routes>
</StyledCommunityPage>
    );
}

const StyledCommunityPage = styled.div`
  height: 100%;
`;
