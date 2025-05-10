import React, { useState } from 'react';

const engineers = ['곽민수', '김민태', '배문설', '이준희', '이지은', '이태훈', '임규황', '임상진', '정용민', '홍석주'];

const clientsByEngineer = {
  '이지은': ['가톨릭대학교 여의도성모병원', '가은병원', '우제영내과'],
  '곽민수': ['순천향대학교부속부천병원', '보성요양병원'],
  '홍석주': ['장기성모내과'],
};

const devicesByClient = {
  '보성요양병원': [
    { serial: '2VSAWW17', last: '2023-05-02', next: '2025-05-02' },
    { serial: '3D2KA3EX', last: '2024-03-15', next: '2026-03-15' }
  ]
};

function App() {
  const [engineer, setEngineer] = useState('');
  const [client, setClient] = useState('');

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h2>Maintenance App</h2>

      {!engineer && (
        <div>
          <label>엔지니어를 선택하세요: </label>
          <select onChange={(e) => setEngineer(e.target.value)}>
            <option value="">-- 선택 --</option>
            {engineers.map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>
      )}

      {engineer && !client && (
        <div style={{ marginTop: 20 }}>
          <h3>{engineer}님의 거래처 목록</h3>
          {clientsByEngineer[engineer]?.map(loc => (
            <div
              key={loc}
              style={{
                padding: 10,
                marginBottom: 5,
                backgroundColor: '#f2f2f2',
                cursor: 'pointer'
              }}
              onClick={() => setClient(loc)}
            >
              📍 {loc}
            </div>
          ))}
        </div>
      )}

      {client && (
        <div style={{ marginTop: 20 }}>
          <h3>{client} - 장비 목록</h3>
          <div style={{ fontWeight: 'bold', display: 'flex', gap: 20 }}>
            <span>시리얼번호</span>
            <span>마지막 점검일</span>
            <span>다음 예정일</span>
          </div>
          {devicesByClient[client]?.map(dev => (
            <div key={dev.serial} style={{ display: 'flex', gap: 20 }}>
              <span>{dev.serial}</span>
              <span>{dev.last}</span>
              <span>{dev.next}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
