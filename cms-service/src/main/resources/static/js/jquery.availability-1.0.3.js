	var _regExpArray = {
		exp_floatNumber: "^([+-]?)\\d*\\.\\d+$", //������
		exp_pFloatNumber: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$", //��������
		exp_nFloatNumber: "^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$", //��������
		exp_pzFloatNumber: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$", //�Ǹ����������������� + 0��
		exp_nzloatNumber: "^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$", //�������������������� + 0��
		exp_intNumber: "^-?[1-9]\\d*$", //����
		exp_pIntNumber: "^[1-9]\\d*$", //������
		exp_nIntNumber: "^-[1-9]\\d*$", //������
		exp_pzNumber: "^[1-9]\\d*|0$", //������������ + 0��
		exp_nzNumber: "^-[1-9]\\d*|0$", //������������ + 0��
		exp_asciiChar: "^[\\x00-\\xFF]+$", //��ACSII�ַ�
		exp_chinese: "^[\\u4e00-\\u9fa5]+$", //������
		exp_color: "^[a-fA-F0-9]{6}$", //��ɫ
		exp_date: "^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$", //����
		exp_email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", //�ʼ�
		exp_idCard: "^[1-9]([0-9]{14}|[0-9]{17})$", //���֤
		exp_ipAddr: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$", //ip��ַ
		exp_letter: "^[A-Za-z]+$", //��ĸ
		exp_lowerLetter: "^[a-z]+$", //Сд��ĸ
		exp_upperLetter: "^[A-Z]+$", //��д��ĸ
		exp_mobile: "^0?(13|15|17|18|14)[0-9]{9}$", //�ֻ�
		exp_numberLetter: /^[0-9a-zA-Z]*$/g, //��������ĸ�����
		exp_notEmpty: "^\\S+$", //�ǿ�
		exp_password: "^.*[A-Za-z0-9\\w_-]+.*$", //����
		exp_number: "^[0-9]+$", //ȫ����
		exp_picture: "(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$", //ͼƬ
		exp_qq: "^[1-9]*[1-9][0-9]*$", //QQ����
		exp_rar: "(.*)\\.(rar|zip|7zip|tgz)$", //ѹ���ļ�
		exp_telephone: "^[0-9\-()����]{7,18}$", //�绰����ĺ���(������֤��������,��������,�ֻ���)
		exp_url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$", //url
		exp_postCode: "^\\d{6}$", //�ʱ�
		exp_telePhoneNew:"\d{2,5}-\d{7,8}"//�̶�����
	};

	var _regExpFunction = {
		// �ж�str�Ƿ�Ϊ�գ�ͨ��allowBlank�������滻����Ϊ��ʱ�����ֵ
		isEmpty: function (str, allowBlank) {
			return str === null || str === undefined || (!allowBlank ? str === '' : false);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ��
		isEmpty: function (str) {
			return !new RegExp(_regExpArray.exp_notEmpty).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ��
		isNotEmpty: function (str) {
			return new RegExp(_regExpArray.exp_notEmpty).test(str);
		},
		// ͨ��������ʽ�ж�str�ĳ����Ƿ���_min��_max��֮�䣬�����ַ�ռһλ�ַ�
		betweenLength: function (str, _min, _max) {
			if ((new RegExp(_regExpArray.exp_notEmpty).test(str)) && (new RegExp(_regExpArray.exp_pzNumber).test(_min)) && (new RegExp(_regExpArray.exp_pzNumber).test(_max))) {
				return (str.length >= _min && str.length <= _max);
			}
			return false;
		},
		// �ж�str�ĳ����Ƿ����Χ֮��
		maxLength: function (str, _max) {
			if ((new RegExp(_regExpArray.exp_notEmpty).test(str)) && (new RegExp(_regExpArray.exp_pIntNumber).test(_max))) {
				return (str.length <= _max);
			}
			return false;
		},
		// ͨ��������ʽ�ж�str�Ƿ�ȫ��Ϊ����
		isNumber: function (str) {
			return new RegExp(_regExpArray.exp_number).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�ȫ��Ϊ������0
		ispzNumber: function (str) {
			return new RegExp(_regExpArray.exp_pzNumber).test(str);	
		},
		// ͨ��������ʽ�ж�str�Ƿ�ȫ��Ϊ������0
		isnzNumber: function (str) {
			return new RegExp(_regExpArray.exp_nzNumber).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ�����ʽ****@**.**
		isEmail: function (str) {
			return new RegExp(_regExpArray.exp_email).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ�绰�����ʽ ����-********��(����)********�����ţ�********
		isTelephone: function (str) {
			return new RegExp(_regExpArray.exp_telephone).test(str);
		},
		isTelephoneNew: function (str) {
			return new RegExp(_regExpArray.exp_telePhoneNew).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ�ƶ��绰��ʽ��֧��12 13 14 15 16 17 18 19��ͷ���ֻ�����
		isMobile: function (str) {
			return new RegExp(_regExpArray.exp_mobile).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ������
		isFloatNumber: function (str) {
			return new RegExp(_regExpArray.exp_floatNumber).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ��������
		ispFloatNumber: function (str) {
			return new RegExp(_regExpArray.exp_pFloatNumber).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ����������0
		ispzFloatNumber: function (str) {
			return new RegExp(_regExpArray.exp_pzFloatNumber).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ��������
		isnFloatNumber: function (str) {
			return new RegExp(_regExpArray.exp_nFloatNumber).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ����������0
		isnzFloatNumber: function (str) {
			return new RegExp(_regExpArray.exp_nzFloatNumber).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ����
		isIntNumber: function (str) {
			return new RegExp(_regExpArray.exp_intNumber).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ������
		ispIntNumber: function (str) {
			return new RegExp(_regExpArray.exp_pIntNumber).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ������
		isnIntNumber: function (str) {
			return new RegExp(_regExpArray.exp_nIntNumber).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�ΪAscii
		isAsciiChar: function (str) {
			return new RegExp(_regExpArray.exp_asciiChar).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�ȫΪ����
		isChinese: function (str) {
			return new RegExp(_regExpArray.exp_chinese).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ��ɫ�ĸ�ʽ
		isColor: function (str) {
			return new RegExp(_regExpArray.exp_color).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ����date�ĸ�ʽ
		isDate: function (str) {
			return new RegExp(_regExpArray.exp_date).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ���֤�Ÿ�ʽ
		isIdCard: function (str) {
			return new RegExp(_regExpArray.exp_idCard).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊip��ַ��ʽ
		isIpAddr: function (str) {
			return new RegExp(_regExpArray.exp_ipAddr).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�ȫΪ��ĸ
		isLetter: function (str) {
			return new RegExp(_regExpArray.exp_letter).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�ȫΪСд��ĸ
		isLowerLetter: function (str) {
			return new RegExp(_regExpArray.exp_lowerLetter).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�ȫΪ��д��ĸ
		isUpperLetter: function (str) {
			return new RegExp(_regExpArray.exp_upperLetter).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�ΪͼƬ���Ƶĸ�ʽ
		isPicture: function (str) {
			return new RegExp(_regExpArray.exp_picture).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�ΪQQ����ĸ�ʽ
		isQQ: function (str) {
			return new RegExp(_regExpArray.exp_qq).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊѹ���ļ����ĸ�ʽ
		isRar: function (str) {
			return new RegExp(_regExpArray.exp_rar).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ��վurl��ַ��ʽ
		isUrl: function (str) {
			return new RegExp(_regExpArray.exp_url).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ�ʱ�����ʽ
		isPostCode: function (str) {
			return new RegExp(_regExpArray.exp_postCode).test(str);
		},
		// ͨ��������ʽ�ж�str�Ƿ�Ϊ���֡���ĸ����������ĸ��ϸ�ʽ
		isNumberAndLetter: function (str) {
			return new RegExp(_regExpArray.exp_numberLetter).test(str);
		},
		// ����������ʽ�����øù����ж�str
		isTest: function (regExp, str) {
			if (new RegExp(_regExpArray.exp_notEmpty).test(str)) {
				return new RegExp(regExp).test(str);
			}
			return false;
		}
	};