공용 방문예약 시스템
- index.html: 고객용 예약폼
- Code.gs: Google Sheet 저장 + SMS 연결용 Apps Script

흐름:
네이버 블로그 방문예약 이미지 → 예약폼 → 성명/연락처/방문일/방문시간 → 신청 → Google Sheet → 담당자 SMS

현장 구분 예:
https://예약폼주소/?site=오산%20헤리티지자이
같은 예약폼 하나로 여러 현장을 사용할 수 있습니다.

중요:
검증되지 않은 기존 Apps Script 주소나 SMS 비밀키는 넣지 않았습니다.
실제 문자 수신까지 완성하려면 현재 홈페이지에서 이미 정상 작동 중인 Apps Script/SMS 발송 로직을 Code.gs의 sendSms()에 연결해야 합니다.
API Key/Secret은 채팅에 보내지 마세요.

배포 전 반드시 테스트 예약 1건으로
(1) 시트 저장 (2) 담당자 휴대폰 문자 수신을 모두 확인하세요.
