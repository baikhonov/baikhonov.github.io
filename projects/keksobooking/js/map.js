'use strict';

(function () {

  var MapLimits = {
    X_START: 0,
    X_END: 1200,
    Y_START: 130,
    Y_END: 630,
  };
  var PinMain = {
    X_INITIAL: 570,
    Y_INITIAL: 375,
    OFFSET_X: 32,
    OFFSET_Y: 87,
    OFFSET_Y_INITIAL: 32,
  };
  var map = document.querySelector('.map');
  var mapFiltersForm = map.querySelector('.map__filters');
  var mapFiltersFieldsets = mapFiltersForm.querySelectorAll('.map__filters fieldset');
  var mapFiltersSelects = mapFiltersForm.querySelectorAll('.map__filters select');
  var mapPinMain = map.querySelector('.map__pin--main');
  var adFormAddress = document.querySelector('.ad-form #address');

  var activateMap = function () {
    map.classList.remove('map--faded');
    mapFiltersSelects.forEach(function (select) {
      select.removeAttribute('disabled');
    });
    mapFiltersFieldsets.forEach(function (fieldset) {
      fieldset.removeAttribute('disabled');
    });
  };

  var deactivateMap = function () {
    map.classList.add('map--faded');
    window.card.remove();
    window.pin.removeAll();
    mapPinMain.style.left = PinMain.X_INITIAL + 'px';
    mapPinMain.style.top = PinMain.Y_INITIAL + 'px';
    mapFiltersForm.reset();
    mapFiltersSelects.forEach(function (select) {
      select.setAttribute('disabled', 'disabled');
    });
    mapFiltersFieldsets.forEach(function (fieldset) {
      fieldset.setAttribute('disabled', 'disabled');
    });
  };

  /**
   * Изменение адреса в поле согласно координатам главного пина
   */
  var adFormAddressChange = function () {
    adFormAddress.value = (parseInt(mapPinMain.style.left.slice(0, -2), 10) + PinMain.OFFSET_X) + ', ' + (parseInt(mapPinMain.style.top.slice(0, -2), 10) + PinMain.OFFSET_Y);
  };

  /**
   * Обработчик клика на главный пин
   */
  mapPinMain.addEventListener('mousedown', function (evt) {
    if (evt.button === 0 && !window.main.isPageActivated) {
      window.main.activatePage();
      window.main.isPageActivated = true;
    }

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      var deltaX = mapPinMain.offsetLeft - shift.x;
      mapPinMain.style.left = deltaX + 'px';
      if (deltaX > (MapLimits.X_END - PinMain.OFFSET_X)) {
        mapPinMain.style.left = (MapLimits.X_END - PinMain.OFFSET_X) + 'px';
      }
      if (deltaX < (MapLimits.X_START - PinMain.OFFSET_X)) {
        mapPinMain.style.left = (MapLimits.X_START - PinMain.OFFSET_X) + 'px';
      }

      var deltaY = mapPinMain.offsetTop - shift.y;
      mapPinMain.style.top = deltaY + 'px';
      if (deltaY > (MapLimits.Y_END - PinMain.OFFSET_Y)) {
        mapPinMain.style.top = (MapLimits.Y_END - PinMain.OFFSET_Y) + 'px';
      }
      if (deltaY < (MapLimits.Y_START - PinMain.OFFSET_Y)) {
        mapPinMain.style.top = (MapLimits.Y_START - PinMain.OFFSET_Y) + 'px';
      }

      adFormAddressChange();

    };

    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });

  /**
   * Обработчик нажатия клавиши на главный пин
   */
  mapPinMain.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter' && !window.main.isPageActivated) {
      window.main.activatePage();
      window.main.isPageActivated = true;
    }
  });

  /**
   * Показывает первоначальную партию неотфильтрованных объявлений
   * @param {Array} data - объявления, загружаемые с сервера
   */
  var showPins = function (data) {
    window.pin.render(data);
    window.filter.initialAds = data;
  };

  window.map = {
    pinMain: PinMain,
    showPins: showPins,
    activate: activateMap,
    deactivate: deactivateMap,
  };

})();
