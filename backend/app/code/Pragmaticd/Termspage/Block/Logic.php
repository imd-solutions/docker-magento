<?php

namespace Pragmaticd\Termspage\Block;
use \Magento\Framework\View\Element\Template as Template;
use \Magento\Framework\View\Element\Template\Context as Context;

class Logic extends Template
{
    public function __construct(Context $context)
    {
        parent::__construct($context);
    }

   protected function _prepareLayout()
    {
        //return parent::_prepareLayout();
    }
}